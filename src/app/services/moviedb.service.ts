import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviedbService {
  private token = '44f63178760c028c7269aab4ef019b6f';
  private urlMoviedb = '//api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getRandomPeople(query: string) {
    const url = `${this.urlMoviedb}person/${query}?api_key=${this.token}&language=en-US`;

    return this.http.jsonp(url, 'callback');
  }

  getPopularPeople(query: string) {
    const url = `${this.urlMoviedb}person/popular?api_key=${this.token}&language=en-US&page=${query}`;

    return this.http.jsonp(url, 'callback');
  }

  getMovieID(query: string) {
    const url = `${this.urlMoviedb}search/movie?api_key=${this.token}&language=en-US&query=${query}&page=1&include_adult=true`;

    return this.http.jsonp(url, 'callback');
  }

  searchMovie(query: string) {
    const url = `${this.urlMoviedb}search/movie?query=${
      query}&sort_by=popularity.desc&api_key=${this.token}&language=en-US&include_adult=true`;

    return this.http.jsonp(url, 'callback');
  }

}
