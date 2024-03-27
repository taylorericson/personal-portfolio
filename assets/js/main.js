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
