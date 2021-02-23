import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  title = 'Movie List';
  movies = Movies;
  selectedMovie!:Movie;
  onSelect(movie:Movie):void{
    this.selectedMovie = movie;
  }

  constructor() {}

  ngOnInit() {}
  getTitle() {
    return this.title;
  }
}
