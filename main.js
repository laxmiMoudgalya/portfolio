const photoInput = document.getElementById('photoInput');
const chosenPhoto = document.getElementById('chosenPhoto');
const chooseFileBtn = document.querySelector('.choose-file-btn');

// Load saved photo from localStorage on page load
window.addEventListener('load', function () {
    const savedPhoto = localStorage.getItem('chosenPhoto');
    if (savedPhoto) {
        chosenPhoto.src = savedPhoto;
        chosenPhoto.style.display = 'block';
        chooseFileBtn.style.display = 'none'; // Hide the button if a photo is already chosen
    }
});

// Event listener for image preview and saving to localStorage
photoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const photoDataUrl = e.target.result;
            chosenPhoto.src = photoDataUrl;
            chosenPhoto.style.display = 'block';

            // Save the photo data URL to localStorage
            localStorage.setItem('chosenPhoto', photoDataUrl);

            // Hide the "Choose a Photo" button after selecting an image
            chooseFileBtn.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

  
  
  // Typing animation with Typed.js
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true, // Enables looping of the typing animation
  });
  