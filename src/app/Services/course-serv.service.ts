import { Injectable } from '@angular/core';
import {CourseClass} from '../libs/libmodules'

@Injectable({
  providedIn: 'root'
})
export class CourseServService {
  public Courses : CourseClass[] = [];
  constructor() {
    this.Courses.push(new CourseClass(1000,"Learning C#",new Date(2022,12,20),5));
    this.Courses.push(new CourseClass(1001,"VB.NET Advanced",new Date(2023,1,10),5));
    this.Courses.push(new CourseClass(1002,"ASP.NET Core 3",new Date(2023,2,10),3));
  }

public getCourses(){
    return this.Courses;
  }
}
