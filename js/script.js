// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    navMenu.style.display = "block";
    navMenu.style.position = "absolute";
    navMenu.style.top = "100%";
    navMenu.style.left = "0";
    navMenu.style.right = "0";
    navMenu.style.background = body.classList.contains("dark-mode")
      ? "#2d2d2d"
      : "white";
    navMenu.style.padding = "30px";
    navMenu.style.borderRadius = "0 0 30px 30px";
    navMenu.style.boxShadow = "0 20px 30px rgba(0,0,0,0.1)";
    navMenu.style.zIndex = "100";

    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.alignItems = "center";
    navLinks.style.gap = "20px";
  } else {
    navMenu.style.display = "";
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "";
  }
});

// Search Bar Toggle
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");

searchToggle.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

// Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector(".cart-count");
const addToCartButtons = document.querySelectorAll(".btn-secondary");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Animation
    button.textContent = "Added!";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});

// Countdown Timer
function updateCountdown() {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Set end date to 3 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  function timer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
  }

  timer();
  setInterval(timer, 1000);
}

updateCountdown();

// Testimonial Slider
const dots = document.querySelectorAll(".dot");
const testimonials = document.querySelectorAll(".testimonial-card");
let currentSlide = 0;

function showSlide(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 5000);

// Newsletter Subscription
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeBtn.addEventListener("click", () => {
  const email = subscribeEmail.value;

  if (email && email.includes("@") && email.includes(".")) {
    subscribeMessage.textContent =
      "Thank you for subscribing! Check your email for your $30 coupon.";
    subscribeMessage.style.color = "#4CAF50";
    subscribeEmail.value = "";
  } else {
    subscribeMessage.textContent = "Please enter a valid email address.";
    subscribeMessage.style.color = "#f44336";
  }

  setTimeout(() => {
    subscribeMessage.textContent = "";
  }, 5000);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Custom Cursor
const cursor = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Hover effect on buttons
const buttons = document.querySelectorAll(".btn, a, button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.background = "rgba(229, 84, 115, 0.3)";
  });

  button.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "rgba(229, 84, 115, 0.2)";
  });
});

// Loading Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Product Hover Effects
const productCards = document.querySelectorAll(".feature-card");

productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const img = card.querySelector("img");
    img.style.transform = "scale(1.1) rotate(5deg)";
  });

  card.addEventListener("mouseleave", () => {
    const img = card.querySelector("img");
    img.style.transform = "scale(1) rotate(0)";
  });
});
