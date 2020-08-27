import { Component } from '@angular/core';
import { FavChangedEvent } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  post = {
    title: 'Title',
    isFavorite: true,
  };
  onFavChange(eventArgs:FavChangedEvent) {
    console.log("Fav Change:",eventArgs);
  }
}
