StupidApp.ArtistsController = Ember.ArrayController.extend({
  actions: {
    createArtist: function() {
      // Get the Artist name set by the "New Artist" text field
      var name = this.get('newName');
      if (!name) { return false; }
      if (!name.trim()) { return; }

      var newArtistId = this.get('length') + 1;

      // Create the new Artist model
      var artist = this.store.createRecord('artist', {
        id: newArtistId,
        name: name,
        songs: []
      });

      // Clear the "New Artist" text field
      this.set('newName', '');

      // Save the new model
      artist.save();
    }
  }
});


StupidApp.ArtistSongsController = Ember.ArrayController.extend({

  songlistEmpty: function() {
    return (this.get('length') === 0);
  }.property('length').cacheable(),

  newSongPlaceholder: function() {
    return 'New ' + this.get('artist.name') + ' song';
  }.property('artist.name').cacheable(),

  actions: {
    createSong: function() {
      // Append New Song 
      this.get('artist.songs').pushObject({
        id: this.get('content').get('length') + 1,
        title: this.get('newTitle'),
        rating: '0'
      });
      // Save the model
      this.get('artist').save();
      this.set('newTitle', '');
    },

    setRating: function(params) {
      var song = params.item,
          rating = params.rating;
      this.get('artist.songs').objectAt(song.id - 1).rating = rating;
      this.get('artist').save();
      this.notifyPropertyChange('content');
    }
  }
});