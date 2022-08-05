import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}
interface Favorito {
  id: number,
  nombre: string;
 }

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Joshua',
    favoritos: [
      {
        id: 1,
        nombre: 'Final Fantasy VII',
      },
      {
        id: 2,
        nombre: 'Death Strading',
      },
    ],
  };

  guardar() {
    console.log('Posteo Correcto');
  }

  agregarJuego() {
    const nuevofavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }
    this.persona.favoritos.push({ ...nuevofavorito });
    this.nuevoJuego =  ''
  }

  borrarFavorito(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
