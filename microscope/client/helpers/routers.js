Router.route('/', {
  name: 'home',
  template: 'postsList'
});

Router.route('/post/:_id', {
    template: 'postPage',
    data: function(){
        var currPost = this.params._id;
        return Posts.findOne({ _id: currPost});
    }
});
