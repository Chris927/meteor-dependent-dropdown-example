Router.map(function() {
  this.route('home', { path: '/' });
  this.route('things', {
    path: '/things',
    onBeforeAction: function() {
    },
    waitOn: function() {
      this.selectedCategory = this.selectedCategory || new ReactiveVar();
      this.selectedThing = this.selectedThing || new ReactiveVar();
      var sub = Meteor.subscribe('allCategories');
      Meteor.subscribe('thingsByCategory', this.selectedCategory.get());
      Meteor.subscribe('theCurrentThing', this.selectedThing.get());
    },
    data: function() {
      var self = this;
      return {
        categories: function() { return Categories.find(); },
        things: function() { return Things.find({ category: self.selectedCategory.get() }); },
        theThing: function() { return Things.findOne({ _id: self.selectedThing.get() }); },
        selectedCategory: self.selectedCategory,
        selectedThing: self.selectedThing
      }
    }
  });
});
