import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {LastUsedDate} from '../pipes/siftfox.pipes';

@Component({
  templateUrl: 'software.component.html',
  styleUrls: [
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareComponent implements OnInit {

  @ViewChild('removalTemplate') public removalTemplate: TemplateRef<any>;
  @ViewChild('lastUsedTemplate') public lastUsedTemplate: TemplateRef<any>;

  rows = [];
  columns = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/software.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit(): void {
    this.columns = [
      {
        name: 'Application Name',
        prop: 'name'
      },
      {
        name: 'Version'
      },
      {
        name: 'Cost',
        pipe: new CurrencyPipe('en_US')
      },
      {
        name: 'Last Used',
        prop: 'historyMonth',
        pipe: new LastUsedDate()
      },
      {
        name: 'Removal Requested',
        cellTemplate: this.removalTemplate
      }
    ];
  }
}
