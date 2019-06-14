function hideElements(){
    
    var a = document.getElementById("aboutMe");
    a.style.display = "none";
    var b = document.getElementById("hiddenAB");
    b.style.display = "none";
    var c = document.getElementById("resume");
    c.style.display = "none";
    var d = document.getElementById("hiddenRE");
    d.style.display = "none";
    var e = document.getElementById("projects");
    e.style.display = "none";
    var f = document.getElementById("hiddenPR");
    f.style.display = "none";
    var g = document.getElementById("GIT");
    g.style.display = "none";
    var h = document.getElementById("hiddenGIT");
    h.style.display = "none";
}

function changeOpacity(x){
    x.style.opacity = '1';
    x.style.WebkitTransition = 'opacity 1s';
    x.style.MozTransition = 'opacity 1s';
    x.style.WebkitTransitionDuration = '1s';
    x.style.transitionDuration = '1s';
}

function showAboutMe() {
    'use strict';
    var x;
    
    if($(window).width() <= 850){
        x = document.getElementById("hiddenAB");
    } else {
        x = document.getElementById("aboutMe");
    }
    
    if (x.style.display === "none") {
        hideElements();
        x.style.display = "block";
        setTimeout(changeOpacity(x),2000);
    } else {
        x.style.display = "none";
        x.style.opacity = '0';
    }   
}


function showResume() {
    'use strict';
    
    var x;
    
    if($(window).width() <= 850){
        x = document.getElementById("hiddenRE");
    } else {
        x = document.getElementById("resume");
    }
    
    if (x.style.display === "none") {
        hideElements();
        x.style.display = "block";
        setTimeout(changeOpacity(x),2000);

    } else {
        x.style.display = "none";
        x.style.opacity = '0';
    }
}

function showProjects() {
    'use strict';
    
    var x;
    
    if($(window).width() <= 850){
        x = document.getElementById("hiddenPR");
    } else {
        x = document.getElementById("projects");
    }
    
    if (x.style.display === "none") {
        hideElements();
        x.style.display = "block";
        setTimeout(changeOpacity(x),2000);
    } else {
        x.style.display = "none";
        x.style.opacity = '0';
    }
}

function showGIT() {
    'use strict';
    
    var x;
    
    if($(window).width() <= 850){
        x = document.getElementById("hiddenGIT");
    } else {
        x = document.getElementById("GIT");
    }
    
    if (x.style.display === "none") {
        hideElements();
        x.style.display = "block";
        setTimeout(changeOpacity(x),2000);
    } else {
        x.style.display = "none";
        x.style.opacity = '0';
    }
}