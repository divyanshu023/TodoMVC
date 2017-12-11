import {Component, OnInit} from "@angular/core";
import {ArtistsService} from "./artists.service";
import {Artist} from "../models/artist";

@Component({
  selector: 'artists',
  providers: [ ArtistsService ],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit{

  private artists : Artist[];
  private selectedArtist : Artist;


  constructor(private artistService : ArtistsService) {
  }

  ngOnInit() {
    this.artists = this.artistService.getArtists();
  }

  createArtist(name : string) : any {
    console.log("name");
  }

  showArtist(artist : Artist) : any {
    this.selectedArtist = artist;
  }

}
