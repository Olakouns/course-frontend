import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";
import {CountSubject} from "../../models/CountSubject";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() data: Array<CountSubject> = new Array<CountSubject>();
  @ViewChild("baseChart") barChart?: BaseChartDirective;
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Nombre de cours par type de sujet',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ],
      }
    ]
  };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {}

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildBarChart();
  }

  buildBarChart() {
    for (let datum of this.data) {
      this.barChartData.datasets[0].data.push(datum.count);
      this.barChartData.labels?.push(datum.subject);
    }
    this.barChart?.update();
  }
}
