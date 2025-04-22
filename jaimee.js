document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.querySelector('.back-to-top');

    // Show button when scrolled more than 200px
    document.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Slow scroll function
    function slowScrollToTop() {
        const scrollDuration = 500; // Duration in ms (1000ms = 1 second)
        const scrollStep = -window.scrollY / (scrollDuration / 15); // Scroll step for each interval
        const scrollInterval = setInterval(function() {
            if (window.scrollY === 0) {
                clearInterval(scrollInterval); // Stop when reaching the top
            } else {
                window.scrollBy(0, scrollStep); // Scroll by the calculated step
            }
        }, 15); // Repeat every 15ms
    }

    // Scroll to top when the button is clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        slowScrollToTop(); // Trigger the slow scroll
    });
});

