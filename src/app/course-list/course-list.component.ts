import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Course } from '../course/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  @Input() courses:Course[];

  constructor(){
    this.courses = []
  }

}
