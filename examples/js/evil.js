document.cookie = 'secret=trusteveryone';

$('form').on('submit', function (e) {
  e.preventDefault();
  console.log('evil saw form data', $(this).serialize());
});