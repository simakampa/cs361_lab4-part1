// ============================================================
// Week 9 Lab | Talking to the Page — DOM, Events & Validation
// ============================================================

// ------------------------------------------------------------
// Task 1: Grab & Change
// Use querySelector to grab a heading and a paragraph.
// On page load, change the heading's textContent and set the
// paragraph's style.color.
// ------------------------------------------------------------
const heading = document.querySelector('#main-heading');
const paragraph = document.querySelector('#main-paragraph');

heading.textContent = 'DOM, Events & Validation';
paragraph.style.color = 'teal';


// ------------------------------------------------------------
// Task 2: Click Counter
// A button + a <span> showing 0. Each click increases the
// count and updates the span. Keep a count variable and use
// addEventListener for the click.
// ------------------------------------------------------------
const countBtn = document.querySelector('#count-btn');
const countDisplay = document.querySelector('#count-display');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});


// ------------------------------------------------------------
// Task 3: Toggle a Theme
// A 'Dark Mode' button. On click, use classList.toggle to
// add/remove a .dark class on <body>. Styles for .dark live
// in style.css.
// ------------------------------------------------------------
const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


// ------------------------------------------------------------
// Task 4: Build a List from Data
// Given an array of 5 course names, render them as <li> items
// inside a <ul> using map + join + innerHTML. Then add a
// button that appends one new course with createElement.
// ------------------------------------------------------------
let courses = [
  'Introduction to Programming',
  'Data Structures & Algorithms',
  'Web Development',
  'Database Systems',
  'Numerical Analysis'
];

const courseList = document.querySelector('#course-list');

// Renders the current `courses` array into the <ul> using map + join + innerHTML
function renderCourses(list) {
  courseList.innerHTML = list.map(course => `<li>${course}</li>`).join('');
}

renderCourses(courses);

const addCourseBtn = document.querySelector('#add-course-btn');
let newCourseCount = 1;

addCourseBtn.addEventListener('click', () => {
  const newCourseName = `New Course ${newCourseCount}`;
  courses.push(newCourseName);
  newCourseCount++;

  // Append the new course using createElement (as required),
  // rather than re-rendering everything with innerHTML.
  const li = document.createElement('li');
  li.textContent = newCourseName;
  courseList.appendChild(li);
});


// ------------------------------------------------------------
// Task 5: Live Search Filter
// A text input above the list. On the input event, filter the
// courses to those that include the typed text, and re-render
// the list live as the user types.
// ------------------------------------------------------------
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm)
  );
  renderCourses(filteredCourses);
});


// ------------------------------------------------------------
// Task 6: Validate a Form
// A signup form (name, email). On submit, preventDefault, then
// check name isn't empty and email includes '@'. Show a red
// error or green success message with textContent.
// ------------------------------------------------------------
const signupForm = document.querySelector('#signup-form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const formMessage = document.querySelector('#form-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === '' || !emailValue.includes('@')) {
    formMessage.textContent = 'Please enter a valid name and email address.';
    formMessage.className = 'error';
  } else {
    formMessage.textContent = `Thanks for signing up, ${nameValue}!`;
    formMessage.className = 'success';
  }
});
