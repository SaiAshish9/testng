import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    NgContentComponent,
    DirectivesComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
