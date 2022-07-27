import { Component } from '@angular/core';
import { Color, Heroe } from 'src/app/prime-ng/interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayusculas: boolean = true;

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Venom',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'The Joker',
      vuela: false,
      color: Color.morado,
    },
    {
      nombre: 'Ruyk',
      vuela: true,
      color: Color.negro,
    },
  ];

  cambiarOrden(valor: string) {
    console.log(valor)
    this.ordenarPor = valor
    console.log(this.ordenarPor)
  }
}
