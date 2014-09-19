var colors = [ 'white', 'grey', 'blue', 'red', 'green', 'yellow' ];

if (Categories.find().count() == 0) {
  console.log('fixtures: creating categories');
  _.each(colors, function(c) {
    Categories.insert({
      description: 'this is category ' + c,
      category: c
    });
  });
}

if (Things.find().count() == 0) {
  console.log('fixtures: creating things');
  _(50).times(function(n) {
    Things.insert({
      description: ('this is thing no ' + n),
      category: _.sample(colors)
    });
  });
}
