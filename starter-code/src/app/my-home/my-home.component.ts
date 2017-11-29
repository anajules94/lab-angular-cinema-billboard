import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  constructor(private addService:CinemaService) { }
  movies;
  ngOnInit() {
    this.movies = this.addService.getMovies();
  }


}
