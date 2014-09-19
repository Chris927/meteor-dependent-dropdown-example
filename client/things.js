Template.things.events({
  'change .catselect': function(e, template) {
    template.data.selectedCategory.set(e.target.value);
  },
  'change .thingselect': function(e, template) {
    template.data.selectedThing.set(e.target.value);
  }
});
