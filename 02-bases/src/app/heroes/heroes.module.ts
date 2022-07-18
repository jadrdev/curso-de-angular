import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    ListadoComponent,
    HeroeComponent
  ],// lisf of components, directives and pipes
  exports: [
    ListadoComponent,
  ],
  imports: [
    CommonModule,
  ]

})
export class HeroesModule {}
