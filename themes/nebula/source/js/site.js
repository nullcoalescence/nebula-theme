/*
*   nebula - site.js
*   javascript executed on every page goes here
*/

var highlightedBlocks;

var navOpen;

window.onload = function() {

    navOpen = false;

    // ** NOTE **
    // For highlighting to work, do NOT use external highlight.js - use Hexo's built in
    // In the site's _config.yml, set 'enable' to true and 'hljs' to false

    // Grab all highlighted code and put "copy to clipboard" buttons above
    highlightedBlocks = document.getElementsByClassName("highlight");
    for (i = 0; i < highlightedBlocks.length; i++) {
        var copyBtn = "<a class='copy-code-btn' href='javascript:copyCode(" + i + ");'>Copy to clipboard</a>";
        highlightedBlocks[i].innerHTML += "<p>" + copyBtn + "</p><br>"; // Inserts button at bottom of snippet 
    }

    // If we are on a 'post' (indicated by sidebar), then insert post headers into the sidebar as quick-links
    if (document.getElementById("post-sidebar")) {
        var headers = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6");

        for (i = 0; i < headers.length; i++) {
            text = headers[i].textContent;

            // Fix up url (lol) @todo there is a better way to do this
            var url = "#" + text.replace(/\s+/g, "-"); // replace spaces w/ dashes
            url = url.replace(",", "");
            url = url.replace("(", "");
            url = url.replace(")", "");
            url = url.replace("!", "");
            url = url.replace("?", "");
            url = url.replace(".", "");

            document.getElementById("post-sidebar--post-headers").innerHTML += "<li><a href='javascript:jumpTo(\"" + url + "\");'>" + text + "</a></li>";
        }
        
    }

}

// Copies code to clipboard
// Creates a hidden text area to copy from
// i = index of .highlight block (this method is called from onLoad function above)
function copyCode(i) {
    copy(highlightedBlocks[i].querySelector("td.code").innerText);

    highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copied!";
    setTimeout(() => {
        highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copy to clipboard";
    }, 3000);
}

// For navigation
function toggleNav() {
    if (navOpen) {
        document.getElementById("navbar--content").style.width = "0";
        navOpen = false;
    } else {
        document.getElementById("navbar--content").style.width = "300px";
        navOpen = true;
    }
}

// For jumping to #locations on posts
// Jumps to location & does animation
function jumpTo(location) {
    var newLocation = location;
    if (location.split("")[0] != "#") {
        newLocation = "#" + location;
    }
    document.location.hash = newLocation;

    //document.getElementById(newLocation.split("#")[1]).style.color = "red";
    document.getElementById(newLocation.split("#")[1]).classList.add("fade-in");

}

/*
*   Utilities
*/

// Copies text to clipboard
function copy(text) {
    var copyTextArea = document.createElement("textarea");
    document.body.appendChild(copyTextArea);
    copyTextArea.value = text;
    copyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextArea);
}