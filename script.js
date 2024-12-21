// Create the Back to Top button dynamically
document.addEventListener("DOMContentLoaded", () => {
    // Create button element
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑ Back to Top";
    backToTopButton.id = "back-to-top";
    backToTopButton.style.display = "none"; // Initially hidden
    document.body.appendChild(backToTopButton);

    // Show the button when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
