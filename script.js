const avatar = document.getElementById('kidAvatar');
const toast = document.getElementById('toast');
const greetings = [
  "You're amazing!",
  "Keep up the great work!",
  "Coding is fun with you!",
  "You rock that keyboard!",
  "JavaScript wizard in training!",
  "Great job, coder!",
  "Keep shining bright!",
  "You're a star programmer!"
];

// Show toast function with fade in/out and queue reset
let toastTimeout;

function showToast(message) {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.style.display = 'block';
  toast.style.opacity = '1';

  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 500);
  }, 3000);
}

// Avatar click shows random positive toast
avatar.addEventListener('click', () => {
  const msg = greetings[Math.floor(Math.random() * greetings.length)];
  showToast(msg);
});

// Sidebar links toast on click
const sidebarLinks = document.querySelectorAll('nav.sidebar a[data-section]');
sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionName = link.getAttribute('data-section');
    showToast(`You clicked on "${sectionName}"!`);
    // Scroll to the section smoothly
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if(targetEl) {
      targetEl.scrollIntoView({behavior: 'smooth'});  
    }
    // Update active class
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const nameInput = document.getElementById('nameInput');
const sayHelloBtn = document.getElementById('sayHelloBtn');
const greeting = document.getElementById('greeting');

sayHelloBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name.length === 0) {
    greeting.textContent = "Please enter your name!";
    greeting.style.color = "#f87171"; // Red-ish
  } else {
    greeting.textContent = `Hello, ${name}! Keep coding and have fun! 🎉`;
    greeting.style.color = "#a7f3d0";
  }
});

// Trigger greeting on Enter key press
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sayHelloBtn.click();
  }
});
