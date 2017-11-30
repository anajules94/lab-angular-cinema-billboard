import { Routes } from "@angular/router";
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';


const routes:Routes = [
  { path: '', redirectTo: 'my-home', pathMatch: 'full' },
  { path: 'my-home',  component: MyHomeComponent },
  { path: 'my-movie/:id', component: MyMovieComponent}

];


export {routes};
