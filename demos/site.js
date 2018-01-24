$('#clicker').no('click', function(e) {
  $(this).html('I Have Been Clicked');
  e.preventDefault();
});
