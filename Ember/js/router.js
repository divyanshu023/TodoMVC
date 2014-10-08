// The index router for the app

StupidApp.Router.map(function() {
  this.resource('index', { path: '/' });
});

// The artist router for the app
StupidApp.Router.map(function() {
  this.resource('artists', function() {
    this.resource('artist', { path: ':id' }, function() {
      this.route('songs');
    });
  });
});

// Implement the Index route, just redirect to artists route

StupidApp.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('artists');
  }
});

// The artist route, load all the artist from the store(saved as fixtures)

StupidApp.ArtistsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('artist');
  }
});

StupidApp.ArtistRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('artist', params.id);
  }
});

StupidApp.ArtistSongsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('artist').get('songs');
   },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('artist', this.modelFor('artist'));
  }
});