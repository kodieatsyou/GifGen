$(document).ready(function() {
  var tags = null;
  var rating = null;
  var title = null;
$("#genrand").click(function(){
	tags = $("#tags").val();
	rating= $("#rating").val();
  title = $("#title").val();
  console.log(tags);
  console.log(rating);
  console.log(title);
});
});