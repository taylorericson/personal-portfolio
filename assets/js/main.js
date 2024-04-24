/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*========== MENU SHOW ==========*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //remove show-menu class when clicking nav links
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*========== SHADOW HEADER ==========*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  //when scroll is greater than 50 viewport height add shadow-header class
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*========== EMAIL JS ==========*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6zgg6fc",
      "template_o0vwyql",
      "#contact-form",
      "jQirydwaOomqnQI3x"
    )
    .then(
      (response) => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";
        console.log(response.text);

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      (error) => {
        // Show error message
        contactForm.textContent = "Message not sent (service error) ❌";
        console.log(error);
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*========== SHOW SCROLL UP ==========*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When scroll is > 350 viewport height, add show-scroll class to tag with scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offSetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== DARK LIGHT THEME =====*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain current theme by validating dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Validate if the user chose a theme
if (selectedTheme) {
  // Activate or deactivate theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
// Activate or deactivate theme with button
themeButton.addEventListener("click", () => {
  // Add or remove dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save theme and currrent icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(".home-perfil, .about-image, .contact-mail", { origin: "right" });
sr.reveal(
  ".home-name, .home-info, .about-container .section-title-1, .about-info, .contact-social, .contact-data",
  { origin: "left" }
);
sr.reveal(".services-card, .projects-card", { interval: 100 });
