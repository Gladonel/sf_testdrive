import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'lastUsedDate'
})
export class LastUsedDate implements PipeTransform {
  transform(value: number): string {
    const convertedDate = moment().subtract(value, 'months').format('YYYY-MM-DD');
    const clockIcon = document.createElement('i');
    clockIcon.classList.add('fa', 'fa-clock-o', 'ml-1');

    if (value > 6) {
      clockIcon.classList.add('text-danger');
      clockIcon.title = 'Rarely used';
    } else if (value <= 6 && value > 2) {
      clockIcon.classList.add('text-warning');
      clockIcon.title = 'Rarely used';
    } else {
      clockIcon.classList.add('text-success');
      clockIcon.title = 'Recently used';
    }

    return convertedDate + clockIcon.outerHTML;
  }
}

@Pipe({
  name: 'removalRequested'
})
export class RemovalRequested implements PipeTransform {
  transform(value: number): string {
    const convertedDate = moment().subtract(value, 'months').format('YYYY-MM-DD');
    const clockIcon = document.createElement('i');
    clockIcon.classList.add('fa', 'fa-clock-o', 'ml-1');

    if (value > 6) {
      clockIcon.classList.add('text-danger');
      clockIcon.title = 'Rarely used';
    } else if (value <= 6 && value > 2) {
      clockIcon.classList.add('text-warning');
      clockIcon.title = 'Rarely used';
    } else {
      clockIcon.classList.add('text-success');
      clockIcon.title = 'Recently used';
    }

    return convertedDate + clockIcon.outerHTML;
  }
}
