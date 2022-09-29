const buttons = document.getElementsByClassName("blog-button");
const texts = document.getElementsByClassName("blog-text");
let textIndex = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (texts[i].style.display === "inline") {
            texts[i].style.display = "none";
            buttons[i].innerHTML = "<strong>+</strong>";
        } else {
            texts[i].style.display = "inline";
            document.getElementById("toggle-this-might-be-the-last-post-again").innerHTML = "<strong>-</strong>";
        }
    });
};