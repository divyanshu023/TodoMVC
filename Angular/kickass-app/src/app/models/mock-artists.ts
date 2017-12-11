
import {Artist} from "./artist";

export const Artists : Artist[] = [
  {
    id: 1,
    name: 'Foo Figters',
    songs: [
      { id: 1, title: 'Pretender', rating: 4.0 },
      { id: 2, title: 'Walk', rating: 3.5}
    ]
  },
  {
    id: 2,
    name: 'Mumford and Sons',
    songs: [
      { id: 1, title: 'Little Lion Man', rating:3.0},
      { id: 2, title: 'The Cave', rating:4.0},
    ]
  },
  { id: 3,
    name: 'Daft Punk',
    songs: [
      { id: 1, title: 'Robot Rock', rating: 3.5},
      { id: 2, title: 'Da Funk', rating: 4.5}
    ]
  }
];
