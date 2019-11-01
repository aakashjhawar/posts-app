import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
  selector: 'courses',
  template: `
        <h2>Courses</h2>
        {{titleCourses}}
        <ul>
          <li *ngFor="#course of courses">
            {{course}}
          </li>
        </ul>

        <h2>Authors</h2>
        {{titleAuthors}}
        <ul>
          <li *ngFor="#author of authors">
            {{author}}
          </li>
        </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
  titleCourses = "The title of course page."; 
  titleAuthors = "The title of author page";
  courses;
  authors = ['a1', 'a2', 'a3']

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses()
  }
}