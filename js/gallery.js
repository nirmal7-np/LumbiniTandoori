document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery-container");
    const uploadForm = document.getElementById("upload-form");
    const uploadInput = document.getElementById("image-upload");
    const uploadStatus = document.getElementById("upload-status");

    // Sample images
    const sampleImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

    // Load images into gallery
    sampleImages.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = `../images/gallery/${img}`;
        imgElement.alt = "Gallery Image";
        imgElement.classList.add("gallery-img");
        galleryContainer.appendChild(imgElement);
    });

    // Handle Image Upload
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (uploadInput.files.length === 0) {
            uploadStatus.textContent = "Please select an image to upload.";
            return;
        }
        const file = uploadInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.classList.add("gallery-img");
            galleryContainer.appendChild(imgElement);
            uploadStatus.textContent = "Image uploaded successfully!";
        };
        reader.readAsDataURL(file);
    });
});
