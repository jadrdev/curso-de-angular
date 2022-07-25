import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private PaisService: PaisService) {} // Inyectamos el servicio

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.isError = false;
    this.PaisService.buscarpais(termino) // Llamamos al Servicio
      .subscribe({
        next: (paises) => {
          this.paises = paises; // Guardamos el resultado en la variable
          console.log(this.paises, 'Array de resultado'); // Imprimimos el resultado
        },
        error: (_) => {
          this.isError = true;
          this.paises = [];
        }, // si hay error
      });
  }

  sugerencias(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.PaisService.buscarpais(termino).subscribe({
      next: (paisesSugeridos) => {
        this.paises = paisesSugeridos.splice(0,3); // Guardamos el resultado en la variable
        console.log(this.paisesSugeridos, 'Array de resultado sugeridos'); // Imprimimos el resultado
      },
      error: (_) => {
        this.isError = true;
        this.paises = [];
      }, // si hay error
    });
  }




  buscarSugerido(termino: string) {
    this.buscar(termino);

  }

}
