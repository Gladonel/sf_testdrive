import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // constructor( ) { }

  public bloombergColor = '#001f3f';
  public ipcColor = '#ff4136';
  public vdColor = '#2ecc40';
  public swColor = '#ff851b';
  public mbColor = '#0074d9';
  public dpColor = '#39cccc';

  public ytdRadio = 'firm';

  private bankMds: Array<number> = [33000, 87000, 57750, 29000];
  private bankIpc: Array<number> = [27000, 71250, 47500, 23750];
  private bankVd: Array<number> = [62000, 75000, 70000, 54000];
  private bankSw: Array<number> = [43000, 116000, 77000, 38000];
  private bankMb: Array<number> = [35000, 93000, 62000, 31000];
  private bankDp: Array<number> = [18000, 46000, 30000, 15000];
  private bankData: Array<any> = [
    {
      data: this.bankMds,
      label: 'Bloomberg Terminal',
      bgClass: 'bg-bloomberg',
      summaryData: _.sum(this.bankMds),
      percentage: _.round(_.sum(this.bankMds) * 100 / this.calculateTotalBankSaving(), 2)
    },
    {
      data: this.bankIpc,
      label: 'IPC Dealerboard',
      bgClass: 'bg-ipc',
      summaryData: _.sum(this.bankIpc),
      percentage: _.round(_.sum(this.bankIpc) * 100 / this.calculateTotalBankSaving(), 2)
    },
    {
      data: this.bankVd,
      label: 'Virtual Desktop',
      bgClass: 'bg-virtual-desktop',
      summaryData: _.sum(this.bankVd),
      percentage: _.round(_.sum(this.bankVd) * 100 / this.calculateTotalBankSaving(), 2)
    },
    {
      data: this.bankMb,
      label: 'Mobile Phone',
      bgClass: 'bg-mobile',
      summaryData: _.sum(this.bankMb),
      percentage: _.round(_.sum(this.bankMb) * 100 / this.calculateTotalBankSaving(), 2)
    },
    {
      data: this.bankSw,
      label: 'Software',
      bgClass: 'bg-software',
      summaryData: _.sum(this.bankSw),
      percentage: _.round(_.sum(this.bankSw) * 100 / this.calculateTotalBankSaving(), 2)
    },
    {
      data: this.bankDp,
      label: 'Desktop Phone',
      bgClass: 'bg-deskphone',
      summaryData: _.sum(this.bankDp),
      percentage: _.round(_.sum(this.bankDp) * 100 / this.calculateTotalBankSaving(), 2)
    }
  ];

  private personalMds: Array<number> = [1150, 1300, 1500, 850];
  private personalIpc: Array<number> = [];
  private personalVd: Array<number> = [];
  private personalSw: Array<number> = [500, 600, 800, 300];
  private personalMb: Array<number> = [0, 1500, 0, 0];
  private personalDp: Array<number> = [1800, 0, 0, 0];
  private personalData: Array<any> = [
    {
      data: this.personalMds,
      label: 'Bloomberg Terminal',
      bgClass: 'bg-bloomberg',
      summaryData: _.sum(this.personalMds),
      percentage: _.round(_.sum(this.personalMds) * 100 / this.calculateTotalPersonalSaving(), 2)
    },
    {
      data: this.personalIpc,
      label: 'IPC Dealerboard',
      bgClass: 'bg-ipc',
      summaryData: _.sum(this.personalIpc),
      percentage: _.round(_.sum(this.personalIpc) * 100 / this.calculateTotalPersonalSaving(), 2)
    },
    {
      data: this.personalVd,
      label: 'Virtual Desktop',
      bgClass: 'bg-virtual-desktop',
      summaryData: _.sum(this.personalVd),
      percentage: _.round(_.sum(this.personalVd) * 100 / this.calculateTotalPersonalSaving(), 2)
    },
    {
      data: this.personalSw,
      label: 'Mobile Phone',
      bgClass: 'bg-mobile',
      summaryData: _.sum(this.personalSw),
      percentage: _.round(_.sum(this.personalSw) * 100 / this.calculateTotalPersonalSaving(), 2)
    },
    {
      data: this.personalMb,
      label: 'Software',
      bgClass: 'bg-software',
      summaryData: _.sum(this.personalMb),
      percentage: _.round(_.sum(this.personalMb) * 100 / this.calculateTotalPersonalSaving(), 2)
    },
    {
      data: this.personalDp,
      label: 'Desktop Phone',
      bgClass: 'bg-deskphone',
      summaryData: _.sum(this.personalDp),
      percentage: _.round(_.sum(this.personalDp) * 100 / this.calculateTotalPersonalSaving(), 2)
    }
  ];

  public mainChartData: Array<any> = this.bankData;
  public mainChartLabels: Array<any> = ['Q1', 'Q2', 'Q3', 'Q4'];
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'label',
      bodySpacing: 5,
      callbacks: {
        label: function (tooltipItem, data) {
          let val = tooltipItem.yLabel;
          if (val >= 1000) {
            val = val / 1000;
            val = val.toFixed(0);
            val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'k';
          }
          return data.datasets[tooltipItem.datasetIndex].label + ': ' + val;
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          callback: function (label, index, labels) {
            let val = (label / 1000).toFixed(0);
            val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'k';
            return val;
          }
        },
        scaleLabel: {
          display: true,
          labelString: '1k = 1000'
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        backgroundColor: '#fff',
        borderWidth: 1,
        radius: 1,
        hitRadius: 10,
        hoverRadius: 5,
        hoverBorderWidth: 3,
      },
      fill: false,
      lineTension: 0.1,
      spanGaps: false,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter'
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    {
      backgroundColor: this.convertHex(this.bloombergColor, 60),
      borderColor: this.bloombergColor,
      pointHoverBorderColor: this.bloombergColor
    },
    {
      backgroundColor: this.convertHex(this.ipcColor, 60),
      borderColor: this.ipcColor,
      pointHoverBorderColor: this.ipcColor
    },
    {
      backgroundColor: this.convertHex(this.vdColor, 60),
      borderColor: this.vdColor,
      pointHoverBorderColor: this.vdColor
    },
    {
      backgroundColor: this.convertHex(this.mbColor, 60),
      borderColor: this.mbColor,
      pointHoverBorderColor: this.mbColor
    },
    {
      backgroundColor: this.convertHex(this.swColor, 60),
      borderColor: this.swColor,
      pointHoverBorderColor: this.swColor
    },
    {
      backgroundColor: this.convertHex(this.dpColor, 60),
      borderColor: this.dpColor,
      pointHoverBorderColor: this.dpColor
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'bar';

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public changeRadioOpt(newVal): void {
    this.ytdRadio = newVal;
    if (newVal === 'firm') {
      this.mainChartData = this.bankData;
    } else {
      this.mainChartData = this.personalData;
    }
  }

  public calculateTotalBankSaving() {
    return _.sum(_.concat(this.bankMds, this.bankIpc, this.bankVd, this.bankSw, this.bankMb, this.bankDp));
  }

  public calculateTotalPersonalSaving() {
    return _.sum(_.concat(this.personalMds, this.personalIpc, this.personalVd, this.personalSw, this.personalMb, this.personalDp));
  }

  ngOnInit(): void {
  }
}
