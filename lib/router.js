Router.map(function() {
  this.route('home', { path: '/' });
  this.route('things', {
    path: '/things',
    onBeforeAction: function() {
      Session.set('selectedThing', null);
      Session.set('selectedCategory', null);
    },
    waitOn: function() {
      Meteor.subscribe('allCategories');
      Meteor.subscribe('thingsByCategory', Session.get('selectedCategory'));
      Meteor.subscribe('theCurrentThing', Session.get('selectedThing'));
    },
    data: {
      categories: function() { return Categories.find(); },
      things: function() { return Things.find({ category: Session.get('selectedCategory') }); },
      theThing: function() { return Things.findOne({ _id: Session.get('selectedThing') }); }
    }
  });
});
