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
  removedServices = [];

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

  onSelect({selected}) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  calculateCostImpact() {
    return _.round(_.sumBy(this.selected, 'cost'), 2);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    const historySw = JSON.parse(sessionStorage.getItem('removedServices'));
    if (historySw != null) {
      this.removedServices = _.concat(this.selected, historySw);
    }

    sessionStorage.setItem('removedServices', JSON.stringify(this.removedServices));

    this.selected = [];
  }

  displayCheck(row) {
    let sessionRemovedSw = JSON.parse(sessionStorage.getItem('removedServices'));
    if (sessionRemovedSw == null) {
      sessionRemovedSw = [];
    }
    row.removalStatus = _.includes(_.map(sessionRemovedSw, 'id'), row.id);
    return !row.removalStatus;
  }

  ngOnInit(): void {
    this.removedServices = JSON.parse(sessionStorage.getItem('removedServices'));
    if (this.removedServices == null) {
      this.removedServices = [];
    }
    console.log(this.removedServices);
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
