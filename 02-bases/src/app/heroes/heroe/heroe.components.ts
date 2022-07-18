import { Component } from "@angular/core";


@Component({
  selector: "app-heroe",
  templateUrl:'heroe.components.html'
})
export class HeroeComponent {
  nombre: string = "Spiderman";
  edad: number = 35;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }

  cambiarNombre(): void {
    this.nombre = "Joker";
  }

  cambiarEdad(): void {
    this.edad = 50;
  }

}
