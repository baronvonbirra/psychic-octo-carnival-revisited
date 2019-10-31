import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routes';
import { MoviedbService } from './services/moviedb.service';
import { InputFetchService } from './services/input-fetch.service';
import { MissingPeoplePipe } from './pipes/missing-people.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaingameComponent } from './components/maingame/maingame.component';
import { GameInputsComponent } from './components/game-inputs/game-inputs.component';
import { HardModeGameComponent } from './components/hard-mode-game/hard-mode-game.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { BoardComponent } from './components/board/board.component';
import { GenerateEasyModePeopleComponent } from './components/generate-easy-mode-people/generate-easy-mode-people.component';
import { PopulateMovieComponent } from './components/populate-movie/populate-movie.component';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { SingleMovieDataComponent } from './components/single-movie-data/single-movie-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaingameComponent,
    MissingPeoplePipe,
    GameInputsComponent,
    HardModeGameComponent,
    GameOverComponent,
    BoardComponent,
    GenerateEasyModePeopleComponent,
    PopulateMovieComponent,
    ModalWrapperComponent,
    ModalComponentComponent,
    SingleMovieDataComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MoviedbService, InputFetchService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalWrapperComponent]
})
export class AppModule {}
