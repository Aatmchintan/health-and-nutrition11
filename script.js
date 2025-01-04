
// Script for basic interactivity
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            alert(`You clicked on the "${link.textContent}" link!`);
        });
    });
});
