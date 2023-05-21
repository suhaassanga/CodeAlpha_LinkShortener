function shortenLink() {
  var originalLink = document.getElementById('original-link').value;
  var shortenedLink = 'http://short.ly/' + Math.random().toString(36).substr(2, 5);

  document.getElementById('shortened-link').innerHTML = 'Shortened Link: <a href="' + shortenedLink + '">' + shortenedLink + '</a>';
}
