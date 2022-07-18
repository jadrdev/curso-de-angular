import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.components';


@NgModule({
  declarations: [
    ContadorComponent
  ],// lisf of components, directives and pipes
  exports: [
    ContadorComponent
  ]

})
export class ContadorModule {}
