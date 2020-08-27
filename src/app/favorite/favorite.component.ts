import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite'],
  encapsulation: ViewEncapsulation.Emulated,
  styles:[
    `
    
    `
  ]
  // Emulated has it's own way of generating class'
  // Native ->native shadow dom of browser not supported by all browsers
  // el=document.querySelector('favorite')
  // root=el.createShadowRoot()
  // root.innerHTML=``
  // scope limited to this part of code only

  // higher style priority
  // shadowDOM
})
export class FavoriteComponent implements OnInit {

   @Input('is-favorite')
   isFavorite: boolean;

   @Output('change')
   click=new EventEmitter();

  constructor() { }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({
      newValue: this.isFavorite
    });
  }

  ngOnInit(): void {
  }
}

export interface FavChangedEvent {
  newValue: boolean;
}

