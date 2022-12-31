function mobileDetect() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log("mobile device");
    }else{
        console.log("not mobile device");
    }
}

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