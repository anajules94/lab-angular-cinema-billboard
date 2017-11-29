import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';
import{Imovies} from '../interfaces/Imovies';
import sampleMovies from '../../sample-movies' // si me traigo service importa esto?

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movies:Array<Imovies> = sampleMovies;


  constructor(private addService:CinemaService, private route: ActivatedRoute) {
  this.route.params
    .subscribe((params) => this.movies = params['id']);
}

  ngOnInit() {
  }
  getMovie(idMovie:number){
  }

}
