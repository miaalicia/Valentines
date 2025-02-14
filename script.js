script.js
js
Copy
Edit
function sayYes() {
    document.body.innerHTML = "<h1>Yay! I Love You Soooo MUCH ❤️</h1>" +
                              "<img src='us.gif'>";
}

function moveNoButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute"; // Move it only after hover
    button.style.left = x + "px";
    button.style.top = y + "px";
}