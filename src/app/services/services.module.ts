import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SoftwareComponent} from './software.component';
import {ServicesRoutingModule} from './services-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LastUsedDate} from '../pipes/siftfox.pipes';
import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
  imports: [CommonModule, ServicesRoutingModule, NgxDatatableModule, OwlModule],
  declarations: [
    SoftwareComponent,
    LastUsedDate
  ]
})
export class ServicesModule {
}
