import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";
import {SubjectLevelCount} from "../../models/SubjectLevelCount";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges{

  @Input() data : Array<SubjectLevelCount>;
  @ViewChild("baseChart") lineChart?: BaseChartDirective;
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  lineChartOptions: ChartConfiguration<'line'>['options'] = {}

  ngOnChanges(changes: SimpleChanges): void {
    this.buildBarChart();
  }

  ngOnInit(): void {
  }

  buildBarChart() {
    for (let level of this.data[0].levels) {
      this.lineChartData.labels?.push(level.level)
    }

    for (let datum of this.data) {
      let values = datum.levels.map(value => value.count);
      this.lineChartData.datasets.push({
        data: values,
        label: datum.subject,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ],
      })
    }
    this.lineChart?.update();
  }

}
