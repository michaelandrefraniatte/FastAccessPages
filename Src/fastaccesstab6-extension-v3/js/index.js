
document.getElementById("submit").addEventListener("click", function (e) {
    search();
});

document.getElementById("search").addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        search();
    }
});

function search() {
    var searchterm = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + escape(searchterm);
}

function escape(unsafe) {
    return encodeURIComponent(unsafe);
}

function boxClick() {
    window.location.href = this.title;
}

const elements = document.getElementsByClassName("box");
for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute('draggable', false);
    elements[i].addEventListener("dragover", (event) => { allowDrop(event); });
    elements[i].addEventListener("dragstart", (event) => { drag(event); });
    elements[i].addEventListener("drop", (event) => { drop(event); });
    elements[i].onclick = boxClick;
}