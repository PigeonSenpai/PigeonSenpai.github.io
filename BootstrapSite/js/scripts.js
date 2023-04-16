document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a.nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800; 
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    });
});

// I guess this is broken? Not really sure why
$(document).ready(function () {
    $("a.nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800, // duration
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});