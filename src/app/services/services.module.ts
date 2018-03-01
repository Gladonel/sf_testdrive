import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SoftwareComponent} from './software.component';
import {ServicesRoutingModule} from './services-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {LastUsedDate} from '../pipes/siftfox.pipes';

@NgModule({
  imports: [CommonModule, ServicesRoutingModule, NgxDatatableModule],
  declarations: [
    SoftwareComponent,
    LastUsedDate
  ]
})
export class ServicesModule {
}
