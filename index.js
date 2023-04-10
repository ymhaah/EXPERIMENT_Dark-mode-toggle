let toggleButton = document.querySelector(".Button");
let body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
});
