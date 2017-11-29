import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import {Imovies} from '../interfaces/Imovies'
import sampleMovies from '../../sample-movies'


@Injectable()
export class CinemaService {
  movies:Array<Imovies>=sampleMovies;

  constructor() { }

getMovies(){
  return this.movies;
}
getMovie(idMovie:number){
  return _.findWhere(this.movies, { id: idMovie });
}
}
