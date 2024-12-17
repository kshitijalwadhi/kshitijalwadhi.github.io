// Function to apply dark mode
function applyDarkMode() {
  const body = document.body;
  const icon = document.getElementById('dark-mode-toggle').querySelector('i');
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  if (isDarkMode) {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  } else {
      body.classList.remove('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('dark-mode-toggle').querySelector('i');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('darkMode', 'enabled'); // Store preference
  } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('darkMode', 'disabled'); // Store preference
  }
}

// Event listener for dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Apply dark mode setting on page load
applyDarkMode();

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    darkModeToggle.classList.add('hidden');
  } else {
    darkModeToggle.classList.remove('hidden');
  }
});
