import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Aguaman', 'Perry', 'Thor', 'Hulk', 'Capitana Marvel']
  heroeEliminado: string = ''
  borrarHeroe() {
    this.heroeEliminado = this.heroes.shift() || '';
  };
}
