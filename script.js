document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    let profile = document.querySelector('.header .flex .profile');
    let searchForm = document.querySelector('.header .flex .search-form');
    let sideBar = document.querySelector('.side-bar');

    document.querySelector('#user-btn').onclick = () => {
        profile.classList.toggle('active');
        searchForm.classList.remove('active');
    };

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        profile.classList.remove('active');
    };

    if (document.querySelector('#menu-btn')) {
        document.querySelector('#menu-btn').onclick = () => {
            sideBar.classList.toggle('active');
            body.classList.toggle('active');
        };
    }

    if (document.querySelector('.side-bar .close-side-bar i')) {
        document.querySelector('.side-bar .close-side-bar i').onclick = () => {
            sideBar.classList.remove('active');
            body.classList.remove('active');
        };
    }

    window.onscroll = () => {
        profile.classList.remove('active');
        searchForm.classList.remove('active');

        if (window.innerWidth < 1200) {
            sideBar.classList.remove('active');
            body.classList.remove('active');
        }
    };

    let toggleBtn = document.querySelector('#toggle-btn');
    let darkMode = localStorage.getItem('dark-mode');

    const enableDarkMode = () => {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
        body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled');
    };

    const disableDarkMode = () => {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
        body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled');
    };

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    toggleBtn.onclick = () => {
        darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'disabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    function isLoggedIn() {
      return false; 
    }
  
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        if (!isLoggedIn()) {
          event.preventDefault();
          alert("Please log in or register to enroll in the course.");
        } else {
          window.location.href = "enroll.html"; 
        }
      });
    });
  });
  


document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.querySelector(".search-form input[name='search_box']");
    const courseBoxes = document.querySelectorAll(".courses .box");

    // Function to filter courses based on search query
    function filterCourses(query) {
      const lowercaseQuery = query.toLowerCase();
      courseBoxes.forEach(courseBox => {
        const title = courseBox.querySelector(".title").textContent.toLowerCase();
        if (title.includes(lowercaseQuery)) {
          courseBox.style.display = "block";
        } else {
          courseBox.style.display = "none";
        }
      });
    }

    // Function to handle filter selection
    function handleFilter(filter) {
      courseBoxes.forEach(courseBox => {
        const category = courseBox.querySelector(".category").textContent.toLowerCase();
        if (filter === "all" || category.includes(filter)) {
          courseBox.style.display = "block";
        } else {
          courseBox.style.display = "none";
        }
      });
    }

    // Event listener for search input
    searchBox.addEventListener("input", function(event) {
      const query = event.target.value.trim();
      filterCourses(query);
    });

    // Event listeners for filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", function(event) {
        const filter = event.target.dataset.filter;
        handleFilter(filter);
      });
    });

    // Add event listener for the filter dropdown
    const filterDropdownBtn = document.querySelector(".filter-dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    filterDropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
      if (!event.target.matches(".filter-dropdown-btn")) {
        dropdownContent.classList.remove("show");
      }
    });
  });


  document.querySelectorAll('.title').forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', event => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});