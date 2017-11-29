import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {routes} from './routes';
import { AppComponent } from './app.component';
import { MyHomeComponent} from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import {CinemaService} from './services/cinema.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
