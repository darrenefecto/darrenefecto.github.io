function MobileMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") 
    {
        x.style.display = "none";
    } 
    else 
    {
        x.style.display = "block";
    }


}

function mobileDetect() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var rainbowButton = document.getElementById('codepen-button');
    if (!rainbowButton) return;
    rainbowButton.style.setProperty('--animationPlayState', 'running');
  }else{
    var rainbowButton = document.getElementById('codepen-button');
    if (!rainbowButton) return;
    rainbowButton.style.setProperty('--animationPlayState', 'paused');
  }
}

function transfer(site)
{   
  if (site)
    window.location.href = "more.html";
  
  if (!site)
    window.location.href = "index.html";

}

function cacheData() {
  var currentUrl = window.location.href;
  const cacheName = "myCache";
  caches.open(cacheName)
    .then(cache => {
      cache.match(currentUrl)
        .then(response => {
          if (response) {
            return response;
          } else {
            return fetch(currentUrl)
              .then(response => {
                cache.put(currentUrl, response);
                return response;
              });
          }
        });
    });
  }