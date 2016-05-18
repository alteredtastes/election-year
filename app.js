var app = angular.module("myApp", []);

app.controller("PostController", function($scope) {

  $scope.commentForm;
  $scope.newComment = {};
  $scope.posts = [{
    title: "Let's build a gigantic wall.",
    author: "DRUMPF",
    image: "http://i1.irishmirror.ie/incoming/article7013085.ece/ALTERNATES/s615b/Donald-Trump.jpg",
    rating: 0,
    description: "Lorem Ispum is a choke artist. It chokes! When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.",
    date: new Date(),
    viewComments: false,
    openCommentForm: false,
    comments: [{
      comment: "Wow.",
      commenter: "Most Americans",
      date: new Date()
    }]
  },
  {
    title: "Larry David is the Socialist.",
    author: "Bernie Sanders",
    image: "http://images.askmen.com/1080x540/2015/11/08-024337-donald_trump_vs_larry_david_on_snl.jpg",
    rating: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
    date: new Date(),
    viewComments: false,
    openCommentForm: false,
    comments: [{
      comment: "Yay! Someone kinda fresh, but not really. Actually pretty old. Yay.",
      commenter: "Youthful Democrats",
      date: new Date()
    },
    {
      comment: "Psychosocialist.",
      commenter: "Republicans",
      date: new Date()
    }]
  }];

  $scope.submitPost = function(isValid) {
    event.preventDefault();
    if (isValid) {
      $scope.post.date = new Date();
      $scope.post.rating = 0;
      $scope.post.viewComments = false;
      $scope.post.openCommentForm = false;
      $scope.post.comments = [];
      $scope.posts.push($scope.post);
      $scope.post = {};
      $scope.view.postForm = false;
    }
  }

  $scope.submitComment = function(validComment, index) {
    event.preventDefault();
    if (validComment) {
      $scope.newComment.date = new Date();
      $scope.posts[index].comments.push($scope.newComment);
      $scope.newComment = {};
      $scope.posts[index].openCommentForm = false;
      $scope.posts[index].viewComments = true;
    }
  }
});
