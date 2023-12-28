import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { GlobalLayoutComponent } from './global-layout.component';
import { TickerIndexComponent } from '../../features/global/ticker/ticker-index.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TickerIndexComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalLayoutRoutingModule {}
