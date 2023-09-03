import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";
import {CourseService} from "./services/course.service";
import {CountSubject} from "./models/CountSubject";
import {SubjectLevelCount} from "./models/SubjectLevelCount";
import {SubscriberAndLecture} from "./models/SubscriberAndLecture";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'course-dashboard';


  isLoading = false;

  countSubjects : Array<CountSubject> = new Array<CountSubject>();
  subjectLevelCounts : Array<SubjectLevelCount> = new Array<SubjectLevelCount>();
  subscriberAndLectures : Array<SubscriberAndLecture> = new Array<SubscriberAndLecture>();
  constructor(private courseService : CourseService) {
  }

  ngOnInit(): void {
    this.countCourseBySubject();
    this.countEachLevelForEachSubject();
    this.countSubscriberAndLectureForEachSubject();
  }

  countCourseBySubject() {
    this.isLoading = true;
    this.courseService.countCourseBySubject().subscribe({
      next: response => {
        this.isLoading = false;
        this.countSubjects = response;
      },
      error: err => {
        this.isLoading = false;
      }
    })
  }

  countEachLevelForEachSubject() {
    this.isLoading = true;
    this.courseService.countEachLevelForEachSubject().subscribe({
      next: response => {
        this.isLoading = false;
        this.subjectLevelCounts = response;
      },
      error: err => {
        this.isLoading = false;
      }
    })
  }

  countSubscriberAndLectureForEachSubject() {
    this.isLoading = true;
    this.courseService.countSubscriberAndLectureForEachSubject().subscribe({
      next: response => {
        this.isLoading = false;
        this.subscriberAndLectures = response;
      },
      error: err => {
        this.isLoading = false;
      }
    })
  }



}
