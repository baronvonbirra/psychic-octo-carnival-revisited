import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InputFetchService {
  private token = '44f63178760c028c7269aab4ef019b6f';
  private urlMoviedb = '//api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  movieChecker(movie: any) {
    console.log(movie);
    return movie;
  }
}
