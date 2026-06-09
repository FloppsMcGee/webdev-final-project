const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const garage = document.querySelector(".garage");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill out all fields.";
    formStatus.style.color = "darkred";
    return;
  }

  formStatus.textContent = "Thank you! Your message has been received.";
  formStatus.style.color = "darkgreen";

  contactForm.reset();
});

if (garage) {
  const garageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          garage.classList.add("open");
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-45% 0px -45% 0px",
    },
  );

  garageObserver.observe(garage);
}
