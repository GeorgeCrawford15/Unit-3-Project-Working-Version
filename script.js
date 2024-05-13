let input = document.querySelector('input');

input.addEventListener('keypress', function (e) { if (e.key === 'Enter') {
  window.location.href = "options.html";
}
});