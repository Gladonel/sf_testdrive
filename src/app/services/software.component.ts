import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {LastUsedDate} from '../pipes/siftfox.pipes';
import * as _ from 'lodash';

@Component({
  templateUrl: 'software.component.html',
  styleUrls: [
    '../../../node_modules/@swimlane/ngx-datatable/release/themes/material.css',
    '../../../node_modules/@swimlane/ngx-datatable/release/assets/icons.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareComponent implements OnInit {

  @ViewChild('serviceTable') serviceTable: any;
  @ViewChild('removalTemplate') public removalTemplate: TemplateRef<any>;
  @ViewChild('appNameTemplate') public appNameTemplate: TemplateRef<any>;

  rows = [];
  columns = [];
  selected = [];

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

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    console.log(_.sumBy(this.selected, 'cost'));
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

  ngOnInit(): void {
    this.columns = [
      {
        width: 30,
        sortable: false,
        canAutoResize: false,
        draggable: false,
        resizeable: false,
        headerCheckboxable: true,
        checkboxable: true
      },
      {
        name: 'Application Name',
        prop: 'name',
        cellTemplate: this.appNameTemplate
      },
      {
        name: 'Version',
        width: 100,
        canAutoResize: false,
      },
      {
        name: 'Cost',
        width: 120,
        canAutoResize: false,
        pipe: new CurrencyPipe('en_US')
      },
      {
        name: 'Last Used',
        prop: 'historyMonth',
        width: 150,
        canAutoResize: false,
        pipe: new LastUsedDate()
      },
      {
        name: 'Removal Requested',
        maxWidth: 220,
        cellTemplate: this.removalTemplate
      }
    ];
  }
}