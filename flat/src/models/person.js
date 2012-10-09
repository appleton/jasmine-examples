var Person = Backbone.Model.extend({
  sayName: function() {
    return this.get('name');
  },
  shoutName: function() {
    return this.get('name').toUpperCase();
  }
});