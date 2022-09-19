console.log("it works!");


document.addEventListener("click")

function toggleHide() {
    var x = document.getElementsByClassName("note");
    If (x.style.backgroundColor === "blue") {
    //    x.style.display === "block";
        x.style.backgroundColor = "red";
    } else {
        x.style.backgroundColor = "blue";
    }
}