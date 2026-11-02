// Select the enquiry form
const enquiryForm = document.getElementById("enquiryForm");

// Select the feedback message
const formMessage = document.getElementById("formMessage");

// Listen for form submission
enquiryForm.addEventListener("submit", function(event) {

    // Prevent the form from submitting immediately
    event.preventDefault();

    // Check whether all required fields are completed
    if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();

        formMessage.textContent =
            "Please complete all required fields correctly.";

        return;
    }

    // Get the phone number
    const phone = document.getElementById("phone").value.trim();

    // Validate the phone number if provided
    const phonePattern = /^[+]?[\d\s()-]{7,20}$/;

    if (phone !== "" && !phonePattern.test(phone)) {
        formMessage.textContent =
            "Please enter a valid phone number.";

        document.getElementById("phone").focus();

        return;
    }

    // Display successful validation feedback
    formMessage.textContent =
        "Your enquiry has passed validation successfully.";

    // Clear the form
    enquiryForm.reset();

});