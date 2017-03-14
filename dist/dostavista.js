$(document).ready(function() {
  $(".word_split").lettering('words');

  $(".page").on('click', function(event) {
    if(event.target.nodeName !== "SPAN") return
    $(event.target).remove()
  });
});
