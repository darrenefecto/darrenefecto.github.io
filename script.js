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
        location.href = "/websites/more.html";
    
    if (!site)
        location.href = "../index.html";

}