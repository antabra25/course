import { Component,Output,EventEmitter } from '@angular/core';
import { Course } from '../course/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

@Output() onAddCourse:EventEmitter<Course>;

constructor (){
  this.onAddCourse = new EventEmitter()
}

sendCourse(title:HTMLInputElement,description:HTMLInputElement,picture:HTMLInputElement,rating:HTMLInputElement){

  const course:Course = new Course(title.value,description.value,rating.value,picture.value)
  this.onAddCourse.emit(course)
}

}
