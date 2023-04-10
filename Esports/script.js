// Slideshow functionality
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();

// Calendar functionality
generateCalendar();

function generateCalendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const startDate = new Date(currentYear, currentMonth, 1);
  const endDate = new Date(currentYear, currentMonth + 1, 0);
  const calendarElement = document.getElementById("calendar");

  for (let i = startDate.getDay(); i > 0; i--) {
    const prevDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - i);
    calendarElement.appendChild(createCalendarDay(prevDate, true));
  }

  for (let i = 1; i <= endDate.getDate(); i++) {
    const date = new Date(currentYear, currentMonth, i);
    calendarElement.appendChild(createCalendarDay(date));
  }

  for (let i = 1; i <= (6 - endDate.getDay()); i++) {
    const nextDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() + i);
    calendarElement.appendChild(createCalendarDay(nextDate, true));
  }
}

function createCalendarDay(date, isOutsideCurrentMonth = false) {
  const dayElement = document.createElement("div");
  dayElement.classList.add("calendar-day");

  if (isOutsideCurrentMonth) {
    dayElement.style.opacity = 0.5;
  }

  if (date.getDay() === 5) { // 5 = Friday
    dayElement.classList.add("loL-practice");
  }

  const dayNumberElement = document.createElement("span");
  dayNumberElement.textContent = date.getDate();
  dayElement.appendChild(dayNumberElement);

  if (dayElement.classList.contains("loL-practice")) {
    const eventElement = document.createElement("span");
    eventElement.textContent = "League of Legends Practice";
    dayElement.appendChild(eventElement);
  }

  return dayElement;
}



document.addEventListener('DOMContentLoaded', function() {
    const signupBtns = document.querySelectorAll('.signup-btn');
    const signupModal = document.getElementById('signup-modal');
    const closeBtn = document.querySelector('.close');
    const signupForm = document.getElementById('signup-form');
  
    signupBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        signupModal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      signupModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === signupModal) {
        signupModal.style.display = 'none';
      }
    });
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('email');
      if (email.checkValidity()) {
        alert('Thank you for signing up!');
        signupModal.style.display = 'none';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  });


  