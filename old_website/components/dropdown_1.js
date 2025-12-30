function toggleDropdown(event) {
    let clickedDropdown = event.currentTarget.parentElement;
    let content = clickedDropdown.querySelector(".dropdown-content");
    let arrow = clickedDropdown.querySelector(".fa-chevron-down");

    let isOpen = content.classList.contains("show");

    if (isOpen) {
        content.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
        clickedDropdown.classList.remove("active");
    } else {
        content.classList.add("show");
        arrow.style.transform = "rotate(180deg)";
        clickedDropdown.classList.add("active");
    }
}

// Attach event listeners to all dropdown headers
document.querySelectorAll(".dropdown-header").forEach(header => {
    header.addEventListener("click", toggleDropdown);
});
