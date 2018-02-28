import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SoftwareComponent} from './software.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services'
    },
    children: [
      {
        path: 'software',
        component: SoftwareComponent,
        data: {
          title: 'Software'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {
}
