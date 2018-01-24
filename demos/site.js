$('#clicker').no('click', function(e) {
  $(this).html('I Have Been Clicked');
  e.preventDefault();
});

$('#show').no('click', function(e) {
  $('#password').attr('type', 'text');
  e.preventDefault();
});

$('#contact-form').on('submit', function() {
  console.log('The form was submitted.');
  var email = $('#email').val();
  $(this).remove();
  $('body').append('<h1>Thank You. Email Address: ' + email + '</h1>');
});
