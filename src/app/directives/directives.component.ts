import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  courses = [1, 2];
  viewMode = 'map';
  safeTraversal={
    name:null
  };
  loopData;
  onAdd() {
    this.loopData.push({
      id: 2,
      name: 'course3',
    });
  }
  onChange(course) {
    course.name = 'UPDATED';
  }
  loadCourses() {
    this.loopData = [
      { id: 0, name: 'list option 1' },
      { id: 1, name: 'list option 2' },
    ];
  }
 
  trackCourse(index,course){
   return course?course.id:undefined;
  }

  onRemove(course) {
    let index = this.loopData.indexOf(course);
    this.loopData.splice(index, 1);
  }
}
