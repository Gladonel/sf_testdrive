import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SoftwareComponent } from "./software.component";
import { HardwareComponent } from "./hardware.component";
import { ServicesRoutingModule } from "./services-routing.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LastUsedDate } from "../pipes/siftfox.pipes";
import { OwlModule } from "ngx-owl-carousel";
import { NgwWowModule } from "ngx-wow";

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgxDatatableModule,
    OwlModule,
    NgwWowModule
  ],
  declarations: [SoftwareComponent, HardwareComponent, LastUsedDate]
})
export class ServicesModule {}
