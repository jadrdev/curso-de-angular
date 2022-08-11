import { Component } from '@angular/core';

interface MenuItem {
  ruta: string
  texto: string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `li{
      cursor: pointer
    }`
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    { ruta: '/graficas', texto: 'Barras' },
    { ruta: '/graficas/barras-dobles', texto: 'Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    {ruta: '/graficas/donahttp', texto: 'DonaHttp'},
  ]


}
