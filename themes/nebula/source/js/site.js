/*
*   nebula - site.js
*   javascript executed on every page goes here
*/

var highlightedBlocks;

var navOpen;

window.onload = function() {

    // Define variables
    navOpen = false;

    // ** NOTE **
    // For highlighting to work, do NOT use external highlight.js - use Hexo's built in
    // In the site's _config.yml, set 'enable' to true and 'hljs' to false

    // Grab all highlighted code and put "copy to clipboard" buttons above
    highlightedBlocks = document.getElementsByClassName("highlight");
    for (i = 0; i < highlightedBlocks.length; i++) {
        var codeText = highlightedBlocks[i].querySelector("td.code").innerText;
        var copyBtn = "<a class='copy-code-btn' href='javascript:copyCode(" + i + ");'>Copy to clipboard</a>";
        highlightedBlocks[i].innerHTML += "<p>" + copyBtn + "</p><br>"; // Inserts button at bottom of snippet
    }

    // If we are on a 'post' (indicated by sidebar), then insert post headers into the sidebar as quick-links
    if (document.getElementById("post-sidebar")) {
        var headers = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6");
        document.getElementById("post-sidebar--post-headers").innerHTML += "<ul>";
        for (i = 0; i < headers.length; i++) {
            var text = headers[i].textContent;
            // do some basic regex to get the #anchor url, add '#', remove spaces and replace them with dashes, and remove () and other symbols
            var url = "#" + text.replace(/\s+/g, "-");
            url = url.replace("([A-Za-z0-9\-\_]+)", "");
            // @TODO
            url = url.replace("(", "");
            url = url.replace(")", "");
            url = url.replace("!", "");
            url = url.replace("?", "");
            url = url.replace(",", "");
            url = url.replace(".", "");
            url = url.replace(";", "");
            url = url.replace(":", "");
            document.getElementById("post-sidebar--post-headers").innerHTML += "<li><a href='javascript:jumpTo(\"" + url + "\")'>" + text + "</a></li>";
        }
    }

    // If we are on a 'post', indicated by the sidebar, then run a media query to see if user is on a desktop.
    // If so, add margin-right to .page-center. Have to do this in JS since we have to detect if we are on a post first
    // Otherwise, all other pages on this site would have a weird right margin
    if (document.getElementById("post-sidebar")) {
        var mediaQuery = window.matchMedia("(min-width: 768px)");
        if (mediaQuery.matches) {
            document.getElementsByClassName("page-center")[0].style.marginRight = "200px";
        }
    }

    // If we are on the archives page, modify the header based on wether user is browsing archives or all posts of a certain tag
    if (document.getElementById("archives-header")) {
        modifyArchivesPageHeader();
    }

}

// Jumps to a sidebar location. Accounts for fixed navbar
function jumpTo(jumpHash) {
    // Jump to the sidebar location offset by 40 pixels upwards, to account for the fixed navbar
    var el = document.getElementById(jumpHash.split("#")[1]);
    var scrollPos = el.offsetTop - 40;
    window.scrollTo(0, scrollPos);
    // Animation

    // Set hash (with fallback) to reflect the page jump
    if (history.pushState) {
        history.pushState(null, null, jumpHash);
    } else {
        location.hash = jumpHash;
    }
}

// Copies code to clipboard
// Creates a hidden text area to copy from
// i = index of .highlight block (this method is called from onLoad function above)
function copyCode(i) {
    var copyTextArea = document.createElement("textarea");
    document.body.appendChild(copyTextArea);
    copyTextArea.value = highlightedBlocks[i].querySelector("td.code").innerText;
    copyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextArea);
    highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copied!";
    setTimeout(function() {
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

// Modifies header of the page. By default it is 'Archives', but if user is on /tags/my-tag, we don't want the header to show 'arcives'
function modifyArchivesPageHeader() {
    var url = window.location.href;
    if (url.includes("tags")) {
        document.getElementById("archives-header").innerHTML = "Tags";
    } else if (url.includes("categories")) {
        document.getElementById("archives-header").innerHTML = "Categories"
    } else {
        document.getElementById("archives-header").innerHTML = "Archives";
    }
}