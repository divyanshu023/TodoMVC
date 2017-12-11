import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'song-rating',
  providers: [ ],
  templateUrl: './ratings.component.html'
})
export class SongRatingsComponent implements OnInit{

  @Input()
  rating : number;

  // private selectedArtist : Artist;
  private starsData : starData[];
  private readonly maxStars  : number = 5;


  constructor() {
  }

  ngOnInit() {
    const starFloor : number = Math.floor(this.rating);
    const songStars : starData[] = this.starRange(1, starFloor, "full");
    const emptyStars : starData[] = this.starRange(starFloor + 1, this.maxStars, "empty");
    this.starsData = songStars.concat(emptyStars);
  }

  private starRange(start: number, end : number, type : string) : starData[] {
    const starsData = [];
    for(let i = start; i<= end; i++) {
      starsData.push({
        rating : i,
        full : type === "full"
      });
    }

    return starsData;
  }

}

interface starData {
  rating : number,
  full : boolean;
}
