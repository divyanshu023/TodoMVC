// StupidApp.Artist = DS.Model.extend({
//   name: DS.attr(),
//   songs: DS.hasMany('song', {async:true})
// });

StupidApp.Artist = DS.Model.extend({
  name: DS.attr(),
  songs: DS.attr()
});


// StupidApp.Song = DS.Model.extend({
//   title: DS.attr(),
//   rating: DS.attr(),
//   artist: DS.belongsTo('artist')
// });


// StupidApp.Artist.FIXTURES = [
//  { id: 1, name: 'Foo Figters', songs: [1,2] },
//  { id: 2, name: 'Mumford and Sons', songs: [3,4] },
//  { id: 3, name: 'Daft Punk', songs: [5,6] }
// ];

StupidApp.Artist.FIXTURES = [
 { 
 	id: 1, 
 	name: 'Foo Figters', 
 	songs: [
 		{ id: 1, title: 'Pretender', rating: '4.0' },
 		{ id: 2, title: 'Walk', rating: '3.5'}
 	]
 },
 { 
 	id: 2, 
 	name: 'Mumford and Sons', 
 	songs: [
 		{ id: 1, title: 'Little Lion Man', rating:'3.0'},
 		{ id: 2, title: 'The Cave', rating:'4.0'},
 	]
 },
 { id: 3, 
 	name: 'Daft Punk', 
 	songs: [
 		{ id: 1, title: 'Robot Rock', rating: '3.5'},
		{ id: 2, title: 'Da Funk', rating: '4.5'}
 	]
 }
];

// StupidApp.Song.FIXTURES = [
// { id: 1, title: 'Pretender', rating: '4', artist: 1},
// { id: 2, title: 'Walk', rating: '3.5', artist: 1},
// { id: 3, title: 'Little Lion Man', rating:'3', artist: 2},
// { id: 4, title: 'The Cave', rating:'4', artist: 2},
// { id: 5, title: 'Robot Rock', rating: '3.5', artist: 3},
// { id: 6, title: 'Da Funk', rating: '4.5', artist: 3}
// ];