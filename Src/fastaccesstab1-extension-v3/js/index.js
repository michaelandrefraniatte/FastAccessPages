
document.getElementById("submit").addEventListener("click", function (e) {
    var searchterm = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + escape(searchterm);
});

function escape(unsafe) {
    return encodeURIComponent(unsafe);
}

document.getElementById("search").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        var searchterm = document.getElementById("search").value;
        window.location.href = "https://www.google.com/search?q=" + escape(searchterm);
    }
});
