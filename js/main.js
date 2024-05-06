// Adding 'header-scrolled' class in header on scrolling
let nav = document.querySelector(".navbar");

// Function to add the class based on scroll position and window width
function addClassBasedOnScrollAndWidth() {
  // Check if the window width is less than or equal to 991px
  if (window.innerWidth <= 991 || document.documentElement.scrollTop > 20) {
    // Add the class if the condition is true
    nav.classList.add("header-scrolled");
  } else {
    // Remove the class if the condition is false
    nav.classList.remove("header-scrolled");
  }
}

// Initial call to set the class based on the initial scroll position and window width
addClassBasedOnScrollAndWidth();

// Attach the function to the scroll event and window resize event
window.addEventListener("scroll", addClassBasedOnScrollAndWidth);
window.addEventListener("resize", addClassBasedOnScrollAndWidth);

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
