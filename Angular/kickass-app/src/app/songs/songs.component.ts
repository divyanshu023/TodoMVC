import {Component, Input, OnInit} from "@angular/core";
import {Artist} from "../models/artist";

@Component({
  selector: 'artist-songs',
  providers: [ ],
  templateUrl: './songs.component.html'
})
export class ArtistSongComponent implements OnInit{

  @Input()
  artist : Artist;

  private selectedArtist : Artist;


  constructor() {
  }

  ngOnInit() {
    // this.selectedArtist = this.artist;
  }

  // createArtist() : any {
  // }
  //
  // showArtist(artist : Artist) : any {
  //   this.selectedArtist = artist;
  // }

}
