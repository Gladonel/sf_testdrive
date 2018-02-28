import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SoftwareComponent} from './software.component';
import {ServicesRoutingModule} from './services-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [CommonModule, ServicesRoutingModule, NgxDatatableModule],
  declarations: [
    SoftwareComponent
  ]
})
export class ServicesModule {
}
