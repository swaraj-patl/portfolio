// Contact form validation
function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("All fields are required!");
      return false;
    }
    return true;
  }
  
  // Simple image slider
  let currentImage = 1;
  setInterval(() => {
    currentImage++;
    if (currentImage > 3) currentImage = 1;
    document.getElementById('sliderImage').src = `images/img${currentImage}.jpg`;
  },3000);
  