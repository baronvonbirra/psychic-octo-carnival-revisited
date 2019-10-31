import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missingPeople'
})
export class MissingPeoplePipe implements PipeTransform {
  transform(img: any): any {
    const url = 'http://image.tmdb.org/t/p/w500/';

    if (img.poster_path) {
      return url + img.poster_path;
    } else if (img.profile_path) {
      return url + img.profile_path;
    } else if (img.backdrop_path) {
      return url + img.backdrop_path;
    } else {
      return 'assets/img/imgnotfound.png';
    }
  }
}
