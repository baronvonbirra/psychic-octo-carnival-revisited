import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

function generateRandomPage() {
  let random = Math.random() * 499;
  random = Math.round(random + 1);
  console.log(random);

  return random.toString();
}

function generateRandomPeople() {
  let random = Math.random() * 19;
  random = Math.round(random);
  console.log(random);

  return random.toString();
}
@Component({
  selector: 'app-generate-easy-mode-people',
  templateUrl: './generate-easy-mode-people.component.html',
  styleUrls: ['./generate-easy-mode-people.component.css']
})
export class GenerateEasyModePeopleComponent implements OnInit {
  randomPeople: any = {};

  constructor(public MOVIEDB: MoviedbService) {}

  populatePeople() {
    const getRandomPage = generateRandomPage();
    const getRandomPeople = generateRandomPeople();
    this.MOVIEDB.getPopularPeople(getRandomPage).subscribe(resp => {
      this.randomPeople = resp['results'][getRandomPeople];
      console.log(this.randomPeople);
    });
  }

  ngOnInit() {
    this.populatePeople();
  }
}
