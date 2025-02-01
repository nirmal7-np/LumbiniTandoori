document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-category ul li");
    const orderList = document.getElementById("order-list");
    const totalPrice = document.getElementById("total-price");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchBar = document.getElementById("search-bar");
    const categories = document.querySelectorAll(".menu-category");

    let total = 0;

    // Show all categories initially
    categories.forEach(cat => cat.style.display = "block");

    // Add item to order
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            let itemName = this.dataset.name;
            let itemPrice = parseFloat(this.dataset.price);

            let listItem = document.createElement("li");
            listItem.innerHTML = `${itemName} - Rs. ${itemPrice} <button class="remove-item">❌</button>`;
            orderList.appendChild(listItem);

            total += itemPrice;
            totalPrice.textContent = total;

            // Remove item from cart
            listItem.querySelector(".remove-item").addEventListener("click", function() {
                total -= itemPrice;
                totalPrice.textContent = total;
                listItem.remove();
            });
        });
    });

    // Filtering categories
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            let selectedCategory = this.dataset.category;
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            categories.forEach(cat => {
                cat.style.display = (cat.dataset.category === selectedCategory || selectedCategory === "all") ? "block" : "none";
            });
        });
    });

    // Search functionality
    searchBar.addEventListener("keyup", function() {
        let filter = this.value.toLowerCase();
        menuItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(filter) ? "block" : "none";
        });
    });

    // Checkout button
    document.getElementById("checkout").addEventListener("click", function() {
    });
});
