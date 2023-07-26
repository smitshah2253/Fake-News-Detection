document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // In a real project, you would handle form submission via AJAX or send the data to a server for processing.
        // For this example, we'll just log the form data to the console.
        console.log("Form data submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Show a thank you message (optional)
        const formSection = document.getElementById("contact");
        formSection.innerHTML = "<h2>Thank You!</h2><p>We've received your message. We'll get back to you soon.</p>";}
)