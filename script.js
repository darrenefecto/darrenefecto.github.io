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
  
  