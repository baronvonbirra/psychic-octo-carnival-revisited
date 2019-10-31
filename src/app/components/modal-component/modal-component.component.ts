import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameInputsComponent } from '../game-inputs/game-inputs.component';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  @Input() title = `MovieModal`;

  constructor(public activeModal: NgbActiveModal) {}

  selectMovie(selected: string) {
    if (selected.length === 0) {
      return;
    } else {
      return this.input
    }
  }

  ngOnInit() {}
}
