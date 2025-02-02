document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            // Toggle between hamburger and cross icon
            if (navMenu.classList.contains("active")) {
                navToggle.innerHTML = "✖"; // Cross icon
            } else {
                navToggle.innerHTML = "☰"; // Hamburger icon
            }
        });

        // Close menu when clicking a menu link
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                navToggle.innerHTML = "☰"; // Reset to hamburger icon
            });
        });
    }
});

    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            // Change button text to "X" when active
            if (navMenu.classList.contains("active")) {
                navToggle.innerHTML = "✖"; // Close icon
            } else {
                navToggle.innerHTML = "☰"; // Hamburger icon
            }
        });
    }

    // Close menu when clicking a link (for better UX)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            navToggle.innerHTML = "☰"; // Reset to hamburger icon
        });
    });

    // Order Form Submission
    const orderForm = document.querySelector("form[action='order_process.php']");
    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = orderForm.querySelector("input[name='name']").value.trim();
            const phone = orderForm.querySelector("input[name='phone']").value.trim();
            const orderDetails = orderForm.querySelector("textarea[name='order_details']").value.trim();

            if (!name || !phone || !orderDetails) {
                alert("Please fill in all order details.");
                return;
            }

            alert("Your order has been placed successfully!");
            orderForm.reset();
        });
    }

    // Reservation Form Submission
    const reservationForm = document.querySelector("form[action='reservation_process.php']");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = reservationForm.querySelector("input[name='name']").value.trim();
            const phone = reservationForm.querySelector("input[name='phone']").value.trim();
            const date = reservationForm.querySelector("input[name='date']").value;
            const time = reservationForm.querySelector("input[name='time']").value;
            const guests = reservationForm.querySelector("input[name='guests']").value.trim();

            if (!name || !phone || !date || !time || !guests) {
                alert("Please fill in all reservation details.");
                return;
            }

            alert("Your table has been reserved successfully!");
            reservationForm.reset();
        });
    }

    // Add-to-Cart Functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const menuItem = this.closest(".menu-item");
            const itemName = menuItem.getAttribute("data-name");
            const itemPrice = menuItem.getAttribute("data-price");

            alert(`Added to cart: ${itemName} (Rs. ${itemPrice})`);
        });
    });

    // Auto-hide navigation bar on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop + 50) { // Added threshold to prevent frequent hiding
            navbar.style.top = "-80px"; // Hide nav when scrolling down
        } else {
            navbar.style.top = "0"; // Show nav when scrolling up
        }
        lastScrollTop = scrollTop;
    });

    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 150;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav ul li a[href="#${section.id}"]`).classList.add("active");
            }
        });
    });
});
