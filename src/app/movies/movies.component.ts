import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  title = 'Movie List';
  movies!: Movie[];
  selectedMovie: Movie = new Movie();

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }
  getTitle() {
    return this.title;
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
