//responsive navbar
const hamburger =document.querySelector('.hamburger')
const navMenu =document.querySelector('.nav-menu')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// sticky header
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('header');
    if(window.scrollY > 0){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach((el, index) => {
    // This sets a CSS variable for staggering animations
    if (el.classList.contains('country-card')) {
        el.style.setProperty('--i', index % 16); // Stagger all 16 cards
    } else if (el.classList.contains('sub_box') || el.classList.contains('box2')) {
        el.style.setProperty('--i', index % 4); // Stagger in groups of 4
    }
    observer.observe(el);
});





//  testimonial slider
document.addEventListener('DOMContentLoaded', function(){
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    const sliderWrapper = document.querySelector('.slider-wrapper')
    const sliderItems = document.querySelectorAll('.item')

    let currentIndex =0;
    const totalItems = sliderItems.length;

    function getItemsToShow(){
        const width =window.innerWidth;
        if(width <= 576){
            return 1;
        } else if(width <= 768){
            return 2;
        } else{
            return 3;
        }
    }


    function updateSliderPosition(){
        const itemsToShow = getItemsToShow();
        const percentage = -(100/itemsToShow) * currentIndex;
        sliderWrapper.style.transform =`translateX(${percentage}%)`;
    }

    function updateButtons(){
        const itemsToShow = getItemsToShow();
        const maxIndex =totalItems -itemsToShow;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    prevBtn.addEventListener('click',()=>{
        if(currentIndex >0){
            currentIndex --;
            updateSliderPosition();
        }
        updateButtons();
    })

    nextBtn.addEventListener('click',()=>{
        const itemsToShow = getItemsToShow();
        const maxIndex = totalItems -itemsToShow;
        if(currentIndex < maxIndex){
            currentIndex++;
            updateSliderPosition();
        }
        updateButtons()
    });

    window.addEventListener('resize',()=>{
      updateSliderPosition();
    updateButtons();
    })
    updateSliderPosition();
    updateButtons();
})