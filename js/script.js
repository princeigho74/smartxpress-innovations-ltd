// Animation on scroll
const animatedItems = document.querySelectorAll(".animate");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  animatedItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// Contact form handling
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting SmartXpress! We'll get back to you soon.");
});
