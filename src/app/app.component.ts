import {Component} from '@angular/core';
import {Course} from "./course/course.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[];

  constructor() {
    this.courses = []
  }

  addCourse(course:Course): Boolean {

    this.courses.push(course)

    return false
  }

}
