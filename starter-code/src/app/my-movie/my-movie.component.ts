import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';
import{Imovies} from '../interfaces/Imovies';
import * as _ from 'underscore';
import sampleMovies from '../../sample-movies' // si me traigo service importa esto?

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie;
  constructor(private addService:CinemaService, private route: ActivatedRoute) {
}
//repasar --> pintar una peli es llamar a la funcion getmovie pasandole el params [id]
  ngOnInit() {
      this.route.params
      .subscribe((params) => this.movie = this.addService.getMovie(params['id']));
  }
    // return _.findWhere(this.movies, { id: idMovie });
  }
