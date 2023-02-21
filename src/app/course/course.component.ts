import {Component, OnInit, Input} from "@angular/core"
import {Course} from "./course.model";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  constructor() {

    this.course = new Course('C++', 'Lenguaje de progremacion de sistemas', '5', '' +
      'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_1280.jpg')

  }

  ngOnInit() {
  }

}
