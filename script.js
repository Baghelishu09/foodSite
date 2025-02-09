// script.js

// Select the required elements
const sliderItems = document.querySelectorAll('.slider-item');
const leftArrow = document.getElementById('leftarrow');
const rightArrow = document.getElementById('rightarrow');

// Keep track of the current active slide
let currentIndex = 1; // Starting at index 1 since the second item is initially active

// Function to update the active state of the slides
function updateActiveState() {
    sliderItems.forEach((item, index) => {
        // Remove active class from all items
        item.classList.remove('active');
        
        // Add active class to the current slide
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

// Function to move to the next slide (right)
function moveRight() {
    currentIndex = (currentIndex + 1) % sliderItems.length; // Wrap around if we go past the last item
    updateActiveState();
}

// Function to move to the previous slide (left)
function moveLeft() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length; // Wrap around if we go past the first item
    updateActiveState();
}

// Event listeners for the left and right arrow buttons
leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

// Hover effect for the right arrow
rightArrow.addEventListener('mouseenter', function() {
    rightArrow.style.transform = 'scale(1.2)';
});

rightArrow.addEventListener('mouseleave', function() {
    rightArrow.style.transform = 'scale(1)';
});

// Hover effect for the left arrow
leftArrow.addEventListener('mouseenter', function() {
    leftArrow.style.transform = 'scale(1.2)';
});

leftArrow.addEventListener('mouseleave', function() {
    leftArrow.style.transform = 'scale(1)';
});

// Initializing the slider by setting the correct active state when the page loads
updateActiveState();
