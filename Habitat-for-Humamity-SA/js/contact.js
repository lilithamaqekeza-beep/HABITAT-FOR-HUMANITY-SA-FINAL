// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the feedback message
const contactMessage = document.getElementById("contactMessage");

// Check the form when the visitor submits it
contactForm.addEventListener("submit", function(event) {

    // Prevent the form from submitting immediately
    event.preventDefault();

    // Check whether all required fields are completed correctly
    if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        contactMessage.textContent =
            "Please complete all required fields correctly.";

        return;
    }

    // Display a successful validation message
    contactMessage.textContent =
        "Your contact form has passed validation successfully.";

    // Clear the form
    contactForm.reset();

});