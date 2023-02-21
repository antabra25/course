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
    this.courses = [new Course('C++', 'Lenguje de programacion', '5', 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg')]
  }

  addCourse(title: HTMLInputElement, description: HTMLInputElement, rating: HTMLInputElement, picture: HTMLInputElement): Boolean {

    this.courses.push(new Course(title.value, description.value, rating.value, picture.value))

    return false
  }

}
