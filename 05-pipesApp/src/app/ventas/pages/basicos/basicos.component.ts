import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'joshua';
  nombreUpper: string = 'JOSHUA';
  nombreCompleto: string = 'joshua Aaron DiaZ RobayNa';

  fecha: Date = new Date() // el día de hoy
}
