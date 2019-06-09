function hideInfoContainer(){
    'use strict';
    var a = document.getElementById("hiddenAB");
    var b = document.getElementById("hiddenRE");
    var c = document.getElementById("hiddenPR");
    var d = document.getElementById("hiddenGIT");
    var e = document.getElementById("aboutMe");
    var f = document.getElementById("resume");
    var g = document.getElementById("projects");
    var h = document.getElementById("GIT");
    
    
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
    f.style.display = 'none';
    g.style.display = 'none';
    h.style.display = 'none';
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
        hideInfoContainer();
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
        hideInfoContainer();
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
        hideInfoContainer();
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
        hideInfoContainer();
        x.style.display = "block";
        setTimeout(changeOpacity(x),2000);

    } else {
        x.style.display = "none";
        x.style.opacity = '0';
    }
}