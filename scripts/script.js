function initializePage() {
    // ... existing code ...

    // Add event listener for Increase Text button
    document.getElementById('increase-text-btn').addEventListener('click', function () {
        increaseTextSize();
    });

    // Add event listener for Black & White Mode button
    document.getElementById('bw-mode-btn').addEventListener('click', function () {
        toggleBlackAndWhiteMode();
    });

    // Add buttons dynamically
    const increaseTextButton = document.createElement('button');
    increaseTextButton.textContent = 'Increase Text (30%)';
    increaseTextButton.addEventListener('click', function () {
        increaseTextSize(0.3); // Increase by 30%
    });
    document.body.appendChild(increaseTextButton);

    const bwModeButton = document.createElement('button');
    bwModeButton.textContent = 'Black & White Mode';
    bwModeButton.addEventListener('click', toggleBlackAndWhiteMode);
    document.body.appendChild(bwModeButton);

    // ... existing code ...

    function increaseTextSize(factor = 0.5) {
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, li, span');
        elements.forEach((element) => {
            const currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
            const newSize = parseFloat(currentSize) * (1 + factor);
            element.style.fontSize = newSize + 'px';
        });
    }

    function toggleBlackAndWhiteMode() {
        const body = document.body;
        body.classList.toggle('bw-mode');

        // Update image colors
        const images = document.querySelectorAll('img, svg');
        images.forEach((image) => {
            image.style.filter = body.classList.contains('bw-mode') ? 'grayscale(100%)' : 'none';
        });
    }
}

// ... existing code ...


function initializePage() {
    const carouselContainer = document.getElementById('carousel-container');
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('carousel-indicators');

    let currentIndex = 0;

    // Set up indicators
    for (let i = 0; i < carousel.children.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    }, 5000);

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

        // Update indicators
        const indicators = indicatorsContainer.children;
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.toggle('active', i === currentIndex);
        }
    }

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    // Use event delegation to handle the menu button click event
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu-button')) {
            openNav();
        } else if (event.target.classList.contains('closebtn')) {
            closeNav();
        }
    });
}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);


function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Update image colors
    }


// Voeg een event listener toe aan je dark mode knop
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  toggleDarkMode();
});
