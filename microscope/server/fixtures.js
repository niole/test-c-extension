if (Posts.find().count() === 0) {
 Posts.insert({
 title: 'Introducing Telescope',
 author: 'Sacha Greif',
 url: 'http://sachagreif.com/introducing-telescope/',
 comments: ["a","b"]
 });
 Posts.insert({
 title: 'Meteor',
 author: 'Tom Coleman',
 url: 'http://meteor.com',
 comments: ["a","b"]
 });
 Posts.insert({
 title: 'The Meteor Book',
 author: 'Tom Coleman',
 url: 'http://themeteorbook.com',
 comments: ["a","b"]
 });
}
