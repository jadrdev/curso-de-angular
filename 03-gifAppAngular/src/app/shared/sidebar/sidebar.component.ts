import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  /**
   * The function buscar() is called when the user types in the search bar. The function takes the
   * value of the search bar and passes it to the buscarGifs() function in the gifs.service.ts file
   * @param {string} termino - string
   */
  buscar(termino: string) {
    console.log(termino)
    this.gifsService.buscarGifs(termino)
  }



}
