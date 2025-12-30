function toggleDropdown(event) {
    let clickedDropdown = event.currentTarget.parentElement;
    let content = clickedDropdown.querySelector(".dropdown-content");
    let arrow = clickedDropdown.querySelector(".fa-chevron-down");

    // Close all other dropdowns
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        if (dropdown !== clickedDropdown) {
            dropdown.querySelector(".dropdown-content").classList.remove("show");
            dropdown.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
            dropdown.classList.remove("active"); // Remove active class
        }
    });

    // Toggle the clicked dropdown
    let isOpen = content.classList.contains("show");

    if (isOpen) {
        content.classList.remove("show");
        arrow.style.transform = "rotate(0deg)";
        clickedDropdown.classList.remove("active"); // Remove active class
    } else {
        content.classList.add("show");
        arrow.style.transform = "rotate(180deg)";
        clickedDropdown.classList.add("active"); // Add active class
    }
}

// Attach event listeners to all dropdown headers
document.querySelectorAll(".dropdown-header").forEach(header => {
    header.addEventListener("click", toggleDropdown);
});
