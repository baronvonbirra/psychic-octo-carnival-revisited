import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviedbService } from '../../services/moviedb.service';
import { InputFetchService } from '../../services/input-fetch.service';
import { SingleMovieDataComponent } from '../single-movie-data/single-movie-data.component';

@Component({
  selector: 'app-game-inputs',
  templateUrl: './game-inputs.component.html',
  styleUrls: ['./game-inputs.component.css']
})
export class GameInputsComponent {
  singleMovie = new SingleMovieDataComponent();
  search = '';
  movies: any = {};
  movieData = {};

  constructor(
    public MOVIEDB: MoviedbService,
    private data: InputFetchService
  ) {}

  onFormSubmit(form: NgForm) {
   this.data.movieChecker(form);
  }

  searchMovie() {
    if (this.search.length === 0) {
      return;
    }

    this.MOVIEDB.searchMovie(this.search).subscribe(resp => {
      const results = 'results';
      this.movies = resp[results];
    });
  }
}
