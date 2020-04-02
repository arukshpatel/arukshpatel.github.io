function git() {
    function addToTable() {
        var responseObj = JSON.parse(this.responseText);
        var length = responseObj.length;
        var stringOut = "";

        for (var i = 0; i < length; i++) {
            stringOut += "<tr>\n\t<th scrope='row'>" + (i + 1) + "</th>\n";
            stringOut += "<td><a class=\"text-decoration-none\" href=" + responseObj[i].url + ">" + responseObj[i].name + "</td>\n";
            stringOut += "<td>" + responseObj[i].description + "</td>\n";
            stringOut += "<td>" + responseObj[i].language + "</td>\n";
            stringOut += "</tr>"
        }

        document.getElementById("gitTableBody").innerHTML = stringOut;
    }
    var request = new XMLHttpRequest();
    request.onload = addToTable;
    request.open('get', 'https://api.github.com/users/arukshpatel/repos', true)
    request.send()
};

function scrollDown() {
    window.scrollBy(0, 10); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('scrollDown()', 10); // scrolls every 10 milliseconds
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        clearTimeout(scrolldelay);
        // scrolldelay = setTimeout('PageUp()', 2000);
    }

    document.getElementById('readMoreTxt').style.display = 'none';
};

function PageUp() {
    clearInterval(scrolldelay)
    window.scrollTo(0, 0);
    scrolldelay = setInterval('pageScroll()', 100);
};