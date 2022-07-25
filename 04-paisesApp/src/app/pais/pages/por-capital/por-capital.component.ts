import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent  {
  termino: string = '';
  isError: boolean = false;
  capitales: Country[]=[]

  constructor(private PaisService: PaisService) {} // Inyectamos el servicio

  buscar(termino: string) {
    this.isError = false;
    this.PaisService.buscarcapital(termino) // Llamamos al Servicio
      .subscribe({
        next: (capital) => {
          this.capitales = capital; // Guardamos el resultado en la variable
          console.log(this.capitales, 'Array de resultado') // Imprimimos el resultado
        },
        error: (_) => {
          this.isError = true
          this.capitales = []
        } // si hay error
    })
  }

}
