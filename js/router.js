class Router {
  constructor(config) {
    this.container = config.container || document.querySelector('#container');
  }
  linkTo(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        this.container.innerHTML = xhr.responseText;
      }
    }
    xhr.send();
  }
}
