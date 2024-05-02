document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
  
    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
      navbarToggler.classList.toggle('active');
    });
  });


  function resizeVideo() {
    var video = document.getElementById('hero-video');

    var aspectRatio = video.videoWidth / video.videoHeight;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var screenAspectRatio = screenWidth / screenHeight;

    if (screenAspectRatio > aspectRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}
window.onresize = resizeVideo;
window.onload = resizeVideo;

document.addEventListener('DOMContentLoaded', function() {
  const text = "Northwest Michigan's Worst Kept Secret"; 
  const speed = 50;

  const typingText = document.getElementById('typing-text');
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}); 