'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < projectItems.length; i++) {
    const projectItem = projectItems[i];
    const category = projectItem.dataset.category;

    if (selectedValue === "all" || selectedValue === category) {
      projectItem.classList.add("active");
    } else {
      projectItem.classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Blog variables
const blogItems = document.querySelectorAll("[data-blog-item]");
const blogModalContainer = document.querySelector("#blog-modal-container");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogOverlay = document.querySelector("[data-blog-overlay]");
// const blogModalImage = document.querySelector("#blog-modal-image");
const blogModalCategory = document.querySelector("#blog-modal-category");
const blogModalDate = document.querySelector("#blog-modal-date");
const blogModalTitle = document.querySelector("#blog-modal-title");
const blogModalText = document.querySelector("#blog-modal-text");

// Function to toggle blog modal
const toggleBlogModal = function () {
  if (blogModalContainer && blogOverlay) {
    blogModalContainer.classList.toggle("active");
    blogOverlay.classList.toggle("active");
  } else {
    console.error("Blog modal container or overlay not found");
  }
}

// Add click event to all blog items
blogItems.forEach(item => {
  item.addEventListener("click", function (event) {
    // Prevent the anchor from scrolling the page to the top
    event.preventDefault();

    // Get the data from the clicked blog item
    const title = this.querySelector("[data-blog-title]").innerText;
    const text = this.querySelector("[data-blog-text]").innerText;
    // const imageSrc = this.querySelector(".blog-banner-box img").src;
    const category = this.querySelector(".blog-category").innerText;
    const date = this.querySelector("time").innerText;

    // Update modal content
    blogModalTitle.innerText = title;
    blogModalText.innerText = text;
    // blogModalImage.src = imageSrc;
    // blogModalImage.alt = title;
    blogModalCategory.innerText = category;
    blogModalDate.innerText = date;

    // Open the modal
    toggleBlogModal();
  });
});

// Add click event to blog modal close button
if (blogModalCloseBtn) {
  blogModalCloseBtn.addEventListener("click", function () {
    toggleBlogModal();
  });
}

// Add click event to the overlay
if (blogOverlay) {
  blogOverlay.addEventListener("click", function () {
    toggleBlogModal();
  });
}

// Project variables
const projectItems = document.querySelectorAll("[data-project-item]");
const projectModalContainer = document.querySelector("#project-modal-container");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalTitle = document.querySelector("#project-modal-title");
const projectModalText = document.querySelector("#project-modal-text");
const projectModalDescription = document.querySelector("#project-modal-description");


// Function to toggle project modal
const toggleProjectModal = function () {
  if (projectModalContainer && projectOverlay) {
    projectModalContainer.classList.toggle("active");
    projectOverlay.classList.toggle("active");
  } else {
    console.error("Project modal container or overlay not found");
  }
};

// Add click event to all project items
projectItems.forEach(item => {
  item.addEventListener("click", function (event) {
    // Prevent the anchor from scrolling the page to the top
    event.preventDefault();

    // Get the data from the clicked project item
    const titleElement = this.querySelector("[data-project-title]");
    const textElement = this.querySelector("[data-project-text]");
    const description = this.querySelector("[data-project-description]");

    // Ensure elements are found before accessing innerText
    if (titleElement && textElement) {
      const title = titleElement.innerText;
      const text = textElement.innerText;

      if (description) {
        projectModalDescription.innerText = description.innerText; // Use innerText to get the text content
      }

      // Update modal content
      projectModalTitle.innerText = title;
      projectModalText.innerText = text;

      // Open the modal
      toggleProjectModal();
    } else {
      console.error("Project title or text not found in the clicked item");
    }
  });
});

// Add click event to project modal close button
if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", function () {
    toggleProjectModal();
  });
}

// Add click event to the overlay
if (projectOverlay) {
  projectOverlay.addEventListener("click", function () {
    toggleProjectModal();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  document.querySelector('[data-form]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const fullname = document.querySelector('[name="fullname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;

    // Send the email using EmailJS
    emailjs.send("service_fwi3suu", "template_a1gkgow", {
      from_name: fullname,
      from_email: email,
      message: message
    }).then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Error: " + error.text);
    });
  });
});