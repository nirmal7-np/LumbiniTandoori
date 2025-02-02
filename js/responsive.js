document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        let width = window.innerWidth;

        if (width <= 768) {
            document.body.classList.add("mobile");
            document.body.classList.remove("desktop");
            console.log("Mobile view activated.");
        } else {
            document.body.classList.add("desktop");
            document.body.classList.remove("mobile");
            console.log("Desktop view activated.");
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
