function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      // Get the window height
      var windowHeight = window.innerHeight;

      // Get the position of the element from the top of the viewport
      var elementTop = reveals[i].getBoundingClientRect().top;

      // Set the visible threshold to 150px
      var elementVisible = 150;

      // If the element is visible, add the "active" class
      if (elementTop < windowHeight - elementVisible) {
        showElement(reveals[i]);
      } else {
        hideElement(reveals[i]);
      }
    }

    function showElement(element) {
      element.classList.add("active");
    }

    function hideElement(element) {
      element.classList.remove("active");
    }
}

window.addEventListener("scroll", reveal);