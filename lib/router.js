var selectedCategory = new ReactiveVar(),
    selectedThing = new ReactiveVar();

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('things', {
    path: '/things',
    onBeforeAction: function() {
      selectedCategory.set(null);
      selectedThing.set(null); // if we don't do this, the selectedThing will be remembered between route changes
    },
    waitOn: function() {
      var sub = Meteor.subscribe('allCategories');
      Meteor.subscribe('thingsByCategory', selectedCategory.get());
      Meteor.subscribe('theCurrentThing', selectedThing.get());
    },
    data: {
      categories: function() { return Categories.find(); },
      things: function() { return Things.find({ category: selectedCategory.get() }); },
      theThing: function() { return Things.findOne({ _id: selectedThing.get() }); },
      selectedCategory: function() { return selectedCategory.get() },
      selectedCategoryVar: selectedCategory,
      selectedThing: function() { return selectedThing.get() },
      selectedThingVar: selectedThing
    }
  });
});
