import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboradComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
