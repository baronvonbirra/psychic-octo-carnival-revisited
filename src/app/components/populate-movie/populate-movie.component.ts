import { Component, OnInit } from '@angular/core';
import { InputFetchService } from '../../services/input-fetch.service';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-populate-movie',
  templateUrl: './populate-movie.component.html',
  styleUrls: ['./populate-movie.component.css'],
  providers: [InputFetchService]
})
export class PopulateMovieComponent implements OnInit {
  movie: any = {};

  constructor(
    public MOVIEDB: MoviedbService,
    private data: InputFetchService
  ) {}

  populateMovie() {
    this.data.currentMovie.subscribe(movie => (this.movie = movie));
  }

  newMovie() {
    console.log('hey! new movie here!');
    this.data.changeMovie(this.movie);
  }

  ngOnInit() {}
}
