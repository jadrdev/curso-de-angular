import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'Joshua';
  segundos: number = 0;
  timerSubcrpition!: Subscription

  // Se ejecuta cuando se inicializa el componente
  constructor() {
    console.log('contructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  // Se ejecuta antes de los cambios en el componente
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  // Verifica que se hayan cambiado los elementos del componente
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // Se ejecuta antes de que el html sea contruido
  ngOnInit(): void {
    console.log('ngInInit');
    this.timerSubcrpition = interval(1000)
      .subscribe((i) => (this.segundos = i));
  }
  // Se llama después de que el componente se destraya
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubcrpition.unsubscribe();
    console.log('Timer limpiado')
  }

  guardar() {}
}


