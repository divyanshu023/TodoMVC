import {Injectable} from "@angular/core";
import {Artists} from "../models/mock-artists";

@Injectable()
export class ArtistsService {

  getArtists() {
    return Artists;
  }

}
