// ✅ Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ✅ Contact form handler
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // reCAPTCHA check
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("⚠️ Please verify that you are not a robot!");
      return;
    }

    // ✅ WhatsApp Redirect
    const whatsappNumber = "2348065202102";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello,%20my%20name%20is%20${encodeURIComponent(name)}.%20My%20email%20is%20${encodeURIComponent(email)}.%20Message:%20${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // ✅ Send Email via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      to_email: "smartxpress74@gmail.com", // ✅ Your business email
      message: message,
      "g-recaptcha-response": recaptchaResponse
    })
    .then(function(response) {
      alert("✅ Message sent successfully via Email!");
    }, function(error) {
      alert("❌ Failed to send email. Please try again.");
    });

    // Reset form + reCAPTCHA
    form.reset();
    grecaptcha.reset();
  });
}
