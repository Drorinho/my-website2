function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const message = event.target.message.value.trim();
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.textContent = `Thanks for reaching out, ${name}! I'll get back to you soon.`;
    event.target.reset();
  } else {
    formMessage.textContent = 'Please fill out all fields.';
  }

  return false; // Prevent actual form submission
}


