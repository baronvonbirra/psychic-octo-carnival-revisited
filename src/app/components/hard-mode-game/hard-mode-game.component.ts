import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

function generateRandomNumber() {
  let random = Math.random() * (9999);
  random = Math.round(random);

  return  random.toString();
}

@Component({
  selector: 'app-hard-mode-game',
  templateUrl: './hard-mode-game.component.html',
  styleUrls: ['./hard-mode-game.component.css']
})
export class HardModeGameComponent implements OnInit {
  randomPeople1: any = {};
  randomPeople2: any = {};

  constructor(public MOVIEDB: MoviedbService) {}

  populatePeople1() {
    const getRandomId = generateRandomNumber();
    this.MOVIEDB.getRandomPeople(getRandomId).subscribe(resp => {
      this.randomPeople1 = resp;
      console.log(resp);
    });
  }

  populatePeople2() {
    const getRandomId = generateRandomNumber();
    this.MOVIEDB.getRandomPeople(getRandomId).subscribe(resp => {
      this.randomPeople2 = resp;
      console.log(resp);
    });
  }

  ngOnInit() {
    this.populatePeople1();
    this.populatePeople2();
  }
}
