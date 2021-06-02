const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function () {
  $('#message').fadeOut('slow');
}, 3000);

var logout = document.querySelector('.js-logout');

logout.addEventListener('click', function () {
  document.querySelector('.js-logout-form').submit();
});
