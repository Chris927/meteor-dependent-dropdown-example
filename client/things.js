Template.things.events({
  'change .catselect': function(e, template) {
    template.data.selectedCategoryVar.set(e.target.value);
  },
  'change .thingselect': function(e, template) {
    template.data.selectedThingVar.set(e.target.value);
  }
});
