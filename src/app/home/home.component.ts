import { Component, OnInit } from '@angular/core';
import {CourseClass} from '../libs/libmodules'
import { CourseServService } from './../Services/course-serv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Courses: CourseClass[] = [];
  public isDivHidden : boolean = true;
  public newCourse : string ="";
  public message : string ="";
  public isMessageHidden : boolean = false;

  constructor(srv: CourseServService) {
    this.Courses = srv.getCourses();
  }

  ngOnInit():void {
  }

  onAddCourseClick(){
    this.isDivHidden = false;
    console.log("Add button clicked");
  }

 onCreatedCourse(){
    this.isMessageHidden=true;
    this.message = `You created the new course with title : ${this.newCourse} ....`;
    setTimeout(()=>{this.isMessageHidden=true},10000);
    this.isDivHidden = true;
 }
 onDeleteClick(courseID:number){
  console.log(`You want to delete courseID : ${courseID}`);
 }
 onEditClick(courseID:number){
  console.log(`You want to edit courseID : ${courseID}`);
 }
}
