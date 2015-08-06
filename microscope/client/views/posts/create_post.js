Template.createPost.events({
    'submit form': function(event){
      event.preventDefault();
      var postTitle = $('[name=postTitle').val();
      var postAuthor = $('[name=postAuthor').val();
      var postUrl = $('[name=postUrl').val();

      Posts.insert({
          url: postUrl,
          title: postTitle,
          author: postAuthor
      });
      $('[name=postTitle').val('');
      $('[name=postAuthor').val('');
      $('[name=postUrl').val('');
    }
});
