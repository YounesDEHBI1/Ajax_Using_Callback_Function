// If we have more than one AJAX task in a website, we should
// create one function for executing the XMLHttpRequest object,
// and one callback function for each AJAX task.

// The function call should contain the "URL" and what "function to call when the response is ready".
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function myFunction(xhttp) {
    document.getElementById("demo").innerHTML =
        xhttp.responseText;
}