import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SoftwareComponent } from "./software.component";
import { HardwareComponent } from "./hardware.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Services"
    },
    children: [
      {
        path: "software",
        component: SoftwareComponent,
        data: {
          title: "Software"
        }
      },
      {
        path: "hardware",
        component: HardwareComponent,
        data: {
          title: "Hardware"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
