StupidApp.StarRatingComponent = Ember.Component.extend({
  classNames: ['rating-panel'],

  maxStars:  Ember.computed.alias('maxRating'),
  songStars: Ember.computed.alias('rating'),

  stars: function() {
    var floorStars = Math.floor(this.get('songStars'));
    var songStars = this.starRange(1, floorStars, 'full');
    var emptyStars = this.starRange(floorStars + 1, this.get('maxStars'), 'empty');
    return songStars.concat(emptyStars);
  }.property('songStars', 'maxStars'),

  starRange: function(start, end, type) {
    var starsData = [];
    for (var i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    };
    return starsData;
  },

  actions: {
    setRating: function(newRating) {
      this.sendAction('setAction', {
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});