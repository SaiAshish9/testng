import { Component, OnInit } from '@angular/core';
import { FavChangedEvent } from './favorite/favorite.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  title = 'test';
  post = {
    title: 'Title',
    isFavorite: true,
  };

constructor(private http: HttpClient){

}

ngOnInit(): void {
  this.http.get('http://localhost:8080/hellobean')
  .subscribe(data =>{
    console.log(data)
  })
}

  onFavChange(eventArgs:FavChangedEvent) {
    console.log("Fav Change:",eventArgs);
  }
}
