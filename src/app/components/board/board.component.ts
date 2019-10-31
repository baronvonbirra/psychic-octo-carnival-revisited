import { Component, OnInit } from '@angular/core';
import { InputFetchService } from '../../services/input-fetch.service';
import { PopulateMovieComponent } from '../populate-movie/populate-movie.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PopulateMovieComponent]
})
export class BoardComponent implements OnInit {
  movie1: any = {};

  constructor(
    private modalService: NgbModal,
    private data: InputFetchService,
    private POP: PopulateMovieComponent
  ) {}

  openMovie1() {
    const modalRef = this.modalService.open(ModalWrapperComponent);
    modalRef.componentInstance.title = 'MovieModal';
  }

  populateMovie() {
    this.POP.newMovie();
    this.movie1 = this.POP.movie;
    console.log(this.movie1);
    this.data.currentMovie.subscribe(movie => (this.movie1 = movie));
    console.log('length ' + this.movie1.length);
  }

  ngOnInit() {
    console.log('length ' + this.movie1.length);
  }
}
