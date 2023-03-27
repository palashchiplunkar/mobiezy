

var testInBrowser = false; // set this to true to test in browser
if (
    testInBrowser ||
    (/Android/i.test(navigator.userAgent) &&
        /Chrome/i.test(navigator.userAgent) &&
        window.matchMedia("(display-mode: fullscreen)").matches)
) {
    if (getCookie("closing") == "true") {
        setCookie("closing", "", 1);
        showCloseDialog();
        returnToOriginalPageIfUserCancels();
        window.stop();
    } else {
        history.pushState(null, null);
        window.addEventListener("popstate", function () {
            setCookie("closing", "true", 10);
            history.go(-(history.length - 2));
        });
    }
}

function showCloseDialog() {
    document.body.style = "background-color:#aaa;";
    var s = document.createElement("SPAN");
    s.style =
        "border-radius:10px;padding:50px 30px 40px 30px;display:table;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;background-color:#fff;font-size:30px;font-family:arial;font-weight:bold;";
    s.appendChild(document.createTextNode("Click back button again to close"));
    s.appendChild(document.createElement("BR"));
    s.appendChild(document.createElement("BR"));
    s.appendChild(document.createTextNode("or"));
    s.appendChild(document.createElement("BR"));
    s.appendChild(document.createElement("BR"));
    var b = document.createElement("BUTTON");
    b.style =
        "font-size:30px;font-family:arial;background:none!important;border:none;color:blue;font-weight:bold;";
    b.innerHTML = "Cancel";
    b.addEventListener("click", function () {
        outsideResolve();
    });
    s.appendChild(b);
    s.appendChild(document.createElement("BR"));
    s.appendChild(document.createElement("BR"));
    s.appendChild(document.createTextNode("to go back"));
    document.body.appendChild(s);
}
async function returnToOriginalPageIfUserCancels() {
    await new Promise(function (resolve) {
        outsideResolve = resolve;
    });
    var steps = history.length - 1;
    if (steps == 1) steps = 0; // takes care of the case when user clicks back on first page
    history.go(steps);
}
function setCookie(cname, cvalue, exseconds) {
    var d = new Date();
    d.setTime(d.getTime() + exseconds * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
