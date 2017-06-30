function postComment(){
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);

  document.getElementById('comments').innerHTML+= commentTemplateFn({comment, commenter});
}
