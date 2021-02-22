import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  template: `<h2>{{Ttile : getTtitle()}}</h2>
    <div>
      {{ movie.id }}/div>
      <div>{{ movie.name }}/div></div>
    </div> `,
})
export class MoviesComponent implements OnInit {
  title = 'Movie List';

  movie: Movie = {
    id: 1,
    name: 'Movie Name',
  };

  constructor() { }

  ngOnInit() { }
  getTitle() {
    return this.title;
  }
}
