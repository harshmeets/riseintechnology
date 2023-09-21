let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    let translateValue = -slideIndex * 100; // Calculate the translation value
    
    slides.forEach(slide => {
        slide.style.transform = `translateX(${translateValue}%)`;
    });
    
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
