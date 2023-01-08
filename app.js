function getIPAddress() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      document.getElementById('ip-address').innerHTML = xhr.responseText;
    }
  }
  xhr.open('GET', 'https://api.ipify.org', true);
  xhr.send();
}
getIPAddress();