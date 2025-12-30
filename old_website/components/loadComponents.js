// Function to load the above header, nav bar and footer on every webpage
function loadComponent(selector, file) {
    fetch(`components/${file}`)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#above-header-container", "above-header.html");
    loadComponent("#navbar-container", "navbar.html");
    loadComponent("#footer-container", "footer.html");
});