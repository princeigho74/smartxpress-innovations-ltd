// Example: simple animation for navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#002b5b";
  } else {
    nav.style.background = "#004aad";
  }
});
