document.addEventListener('DOMContentLoaded', function () {
  fetch('header.html')
    .then(function (response) { return response.text(); })
    .then(function (data) {
      var header = document.getElementById('header');
      if (header) header.innerHTML = data;
    });

  fetch('footer.html')
    .then(function (response) { return response.text(); })
    .then(function (data) {
      var footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    });
});
