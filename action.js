console.log("it works!");

function toggleHide() {
    var x = document.getElementsByClassName("note");

    for (i=0; i<x.length; i++) {
        const htmlElement = x[i];

        if (htmlElement.style.backgroundColor === "blue") {
            htmlElement.style.backgroundColor = "red";
            console.log("toggleHide");
        } else {
            htmlElement.style.backgroundColor = "blue";
        }
    }

    console.log("x", x);
}
