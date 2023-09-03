import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountSubject} from "../models/CountSubject";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SubjectLevelCount} from "../models/SubjectLevelCount";
import {SubscriberAndLecture} from "../models/SubscriberAndLecture";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  countCourseBySubject() : Observable<Array<CountSubject>> {
    return this.httpClient.get<Array<CountSubject>>(`${environment.API_URL}/courses/subjects/count`)
  }

  countEachLevelForEachSubject() : Observable<Array<SubjectLevelCount>> {
    return this.httpClient.get<Array<SubjectLevelCount>>(`${environment.API_URL}/courses/subjects/level/count`)
  }

  countSubscriberAndLectureForEachSubject() : Observable<Array<SubscriberAndLecture>> {
    return this.httpClient.get<Array<SubscriberAndLecture>>(`${environment.API_URL}/courses/subjects/subscriber-lectures`)
  }
}
