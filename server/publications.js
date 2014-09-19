Meteor.publish('allCategories', function() {
  console.log('subscribed to allCategories');
  return Categories.find();
});

Meteor.publish('thingsByCategory', function(category) {
  console.log('subscribed to things by category \'%s\'', category);
  return Things.find({ category: category });
});

Meteor.publish('theCurrentThing', function(id) {
  console.log('subscribed to one thing with id \'%s\'', id);
  return Things.find({ _id: id });
});
