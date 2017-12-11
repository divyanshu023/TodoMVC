import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ArtistsComponent} from "./artists/artists.component";
import {ArtistSongComponent} from "./songs/songs.component";
import {SongRatingsComponent} from "./ratings/ratings.component";


@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistSongComponent,
    SongRatingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
