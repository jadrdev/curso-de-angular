import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {
  miformulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });

  //Llenar el selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = []
  fronteras: PaisSmall[]=[]

  //UI
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private PaisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.PaisesService.regiones;

    //CuandoCambieLaRegion
    this.miformulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miformulario.get('pais')?.reset('');
          this.cargando = true
        }),
        switchMap((region) => this.PaisesService.getPRegiones(region))
      )
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
        this.cargando = false;
      });

    //CuandoCambieElPais
    this.miformulario
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
        this.miformulario.get('frontera')?.reset('')
        this.cargando = true
      }),
        switchMap((codigo) => this.PaisesService.getPaisFrontera(codigo))
      )
      .subscribe((pais) => {
        if (pais !== null) {
          if (pais.length > 0) {
            this.fronteras = pais[0]?.borders;
            this.cargando = false;
          }
        }
      });
  }

  guardar() {
    console.log(this.miformulario.value);
  }
}
