// 1. Fitur Switch Dark Mode / Light Mode
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  
  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// 2. Interaktivitas Form Kontak Sederhana
const contactForm = document.getElementById('contactForm');
const formSuccessAlert = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah halaman reload otomatis
  
  // Tampilkan notifikasi sukses
  formSuccessAlert.classList.remove('hidden');
  
  // Reset isi form
  contactForm.reset();
  
  // Sembunyikan notifikasi setelah 4 detik
  setTimeout(() => {
    formSuccessAlert.classList.add('hidden');
  }, 4000);
});