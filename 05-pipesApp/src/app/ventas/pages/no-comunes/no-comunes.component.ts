import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  //i18mSelect
  nombre: string = 'Joshua';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarGenero() {
    this.nombre = 'Yasmina';
    this.genero = 'femenino';
  }

  //18nPlural

  clientes: string[] = ['Joshua', 'Yasmina', 'Iriome', 'Iraya'];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'no tenemos un cliente esperando',
    '=2': 'no tenemos dos cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValuePipe

  persona = {
    nombre: 'Joshua',
    edad: 38,
    direccion: 'Lugar que no te interesa',
  };

  heroes = [
    {
      nombre: 'Loki',
      EsUnDios: true,
    },
    {
      nombre: 'Thor',
      EsUnDios: true,
    },
    {
      nombre: 'Dr Strange',
      EsUnDios: false,
    },
  ];

  //AsyncPipe
  miObservable = interval(5000)

  valor = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 2000);
  })
}
