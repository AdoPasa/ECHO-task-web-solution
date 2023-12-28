import { NgModule } from '@angular/core';
import { GlobalLayoutComponent } from './global-layout.component';
import { GlobalLayoutRoutingModule } from './global-layout.routing';
import { SharedModule } from '../../modules/shared.module';
import { TickerIndexComponent } from '../../features/global/ticker/ticker-index.component';
import { TickerItemComponent } from '../../features/global/ticker/components/ticker-item.component';

@NgModule({
  declarations: [
    GlobalLayoutComponent,
    TickerIndexComponent,
    TickerItemComponent
  ],
  imports: [
    SharedModule,
    GlobalLayoutRoutingModule,
  ],
})
export class GlobalLayoutModule { }
