import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  inputs:['isFavorite']
})
export class CourseComponent implements OnInit {

  // alias
  @Input('is-favorite') 
  isFavorite: boolean;

  @Output()
  change=new EventEmitter();
  
     constructor() {}
  
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit();
  }


  ngOnInit(): void {}
}
