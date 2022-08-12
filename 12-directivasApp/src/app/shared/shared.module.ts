import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directive/error-msg.directive';
import { CustomIFDirective } from './directive/custom-if.directive';



@NgModule({
  declarations: [ErrorMsgDirective, CustomIFDirective],
  exports: [ErrorMsgDirective, CustomIFDirective],
})
export class SharedModule {}
