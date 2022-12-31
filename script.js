var language = {
    de: {
        nav_txt_1: "Über mich",
        nav_txt_2: "Texturen",
        nav_txt_3: "Soziales",
        i_txt_1: "Hallo! Ich heiße",
        i_txt_2: "Ich bin Spieleentwickler & 3D-Artist",
        am_txt_1: "Über mich",
        am_txt_2: "Spieleentwickler & 3D-Artist",
        am_txt_3: "Ich bin Spieleentwickler und programmiere meine Spiele ausschließlich mit Visual Studio mit der Programmiersprache c++. Ich bin auch 3D-Artist. Ich beschäftige mich mit der Modellierung und den Texturen. Meine Objekte modelliere ich mit Blender. An guten Tagen gehe ich raus und fotografiere Texturen. Ich bearbeite meine Texturen mit Gimp und kenne mich nun mit Gimp bestens aus. Ich kann die folgenden Texturen erstellen: Albedo, Ambient Occlusion, Diffuse, Displacement, Normal",
        mat_txt_1: "Meine Texturen",
        sc_txt_1: "Darrenefecto auf Plattformen"
    }
};

function mobileDetect() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log("mobile device");
    }else{
        console.log("not mobile device");
    }
}

function getLanguage() {
    var userLang = navigator.language || navigator.userLanguage;
    
    if (userLang == "de-DE")
        setGerman();

}

function setGerman() {
    document.getElementById("nav-txt-1").textContent = language.de.nav_txt_1;
    document.getElementById("nav-txt-2").textContent = language.de.nav_txt_2;
    document.getElementById("nav-txt-3").textContent = language.de.nav_txt_3;

    document.getElementById("i-txt-1").textContent = language.de.i_txt_1;
    document.getElementById("i-txt-2").textContent = language.de.i_txt_2;

    document.getElementById("am-txt-1").textContent = language.de.am_txt_1;
    document.getElementById("am-txt-2").textContent = language.de.am_txt_2;
    document.getElementById("am-txt-3").textContent = language.de.am_txt_3;

    document.getElementById("mat-txt-1").textContent = language.de.mat_txt_1;
    document.getElementById("sc-txt-1").textContent = language.de.sc_txt_1;
}