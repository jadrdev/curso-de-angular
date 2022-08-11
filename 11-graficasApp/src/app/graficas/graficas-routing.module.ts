import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonahttpComponent } from './pages/donahttp/donahttp.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'barras',
      component: BarrasComponent,
    },
    {
      path: 'barras-dobles',
      component: BarrasDobleComponent,
    },
    {
      path: 'dona',
      component: DonaComponent,
    },
    {
      path: 'donahttp',
      component: DonahttpComponent,
    },
    {
      path: '**',
      redirectTo: 'barras',
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
