import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";
import {SubscriberAndLecture} from "../../models/SubscriberAndLecture";

@Component({
  selector: 'app-doughnut-char',
  templateUrl: './doughnut-char.component.html',
  styleUrls: ['./doughnut-char.component.css']
})
export class DoughnutCharComponent implements OnInit, OnChanges{
  @Input() data: Array<SubscriberAndLecture>;
  @ViewChild("doughnutChart") doughnutChart?: BaseChartDirective;
  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Nombre de lecteurs',
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#ff0000',
          'rgb(75, 192, 192)',
          '#FF9800',
        ],
      }
    ]
  };
  doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {}

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildBarChart();
  }


  buildBarChart() {
    for (let datum of this.data) {
      this.doughnutChartData.datasets[0].data.push(datum.totalLectures);
      this.doughnutChartData.labels?.push(datum.subject);
    }
    this.doughnutChart?.update();
  }
}
