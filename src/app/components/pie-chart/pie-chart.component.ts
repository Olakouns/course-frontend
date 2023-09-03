import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";
import {SubscriberAndLecture} from "../../models/SubscriberAndLecture";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges{
  @Input() data: Array<SubscriberAndLecture>;
  @ViewChild("doughnutChart") pieChart?: BaseChartDirective;
  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Nombre de subscriber',
        backgroundColor: [
          '#FF9800',
          'rgb(255, 99, 132)',
          '#ff0000',
          'rgb(75, 192, 192)',
        ],
      }
    ]
  };
  pieChartOptions: ChartConfiguration<'pie'>['options'] = {}

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildBarChart();
  }


  buildBarChart() {
    for (let datum of this.data) {
      this.pieChartData.datasets[0].data.push(datum.totalSubscribers);
      this.pieChartData.labels?.push(datum.subject);
    }
    this.pieChart?.update();
  }
}
