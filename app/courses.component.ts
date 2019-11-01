import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
        <h2>Courses</h2>
        {{titleCourses}}
        <input type="text" autoGrow />
        <ul>
          <li *ngFor="#course of courses">
            {{course}}
          </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
  titleCourses = "The title of course page."; 
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses()
  }
}