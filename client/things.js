Template.things.events({
  'change .catselect': function(e) {
    Session.set('selectedCategory', e.target.value);
  },
  'change .thingselect': function(e) {
    Session.set('selectedThing', e.target.value);
  }
});
