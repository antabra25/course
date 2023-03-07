import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import {AppComponent} from './app.component';
import {CourseComponent} from "./course/course.component";
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    CourseFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
