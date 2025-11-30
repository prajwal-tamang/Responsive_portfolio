const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  nav.classList.toggle('active'); // open/close menu
  btn.setAttribute('aria-expanded', nav.classList.contains('active'));
});

// close menu when clicking a link
nav.querySelectorAll('a').forEach(a => 
  a.addEventListener('click', () => nav.classList.remove('active'))
);

// close menu when clicking outside
document.addEventListener('click', e => {
  if(!e.target.closest('header')) nav.classList.remove('active');
});

// close menu on ESC key
document.addEventListener('keydown', e => {
  if(e.key === "Escape") nav.classList.remove('active');
});

// form
const contactForm = document.getElementById("form");
const messageDiv = document.getElementById("form-message");

if (contactForm && messageDiv) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop refresh

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;

    if (nameInput === "" || emailInput === "") {
      messageDiv.textContent = "Please fill out all required fields.";
      messageDiv.style.color = "red";
    } else {
      messageDiv.textContent = "Thank you! I will contact you soon ✅";
      messageDiv.style.color = "green";
      contactForm.reset();
    }
  });
}

