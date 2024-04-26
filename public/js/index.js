document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const reserva = document.querySelector(".reserva");
    const images = document.querySelector(".images");

    button1.addEventListener("click", function() {
        reserva.style.display = "block";
        images.style.display = "none";
    });

    button2.addEventListener("click", function() {
        reserva.style.display = "none";
        images.style.display = "block";
    });

    const allImages = document.querySelector(".all_images");
    const imageSelect = document.querySelector(".image_select");

    // Mostrar la primera imagen por defecto
    const firstImage = allImages.querySelector(".image");
    const imageUrl = firstImage.getAttribute("src");
    const selectedImage = `<img src="${imageUrl}" alt="selected_image">`;
    imageSelect.innerHTML = selectedImage;

    // Actualizar la imagen seleccionada al hacer clic en una imagen de all_images
    allImages.addEventListener("click", function(event) {
        if (event.target.classList.contains("image")) {
            const imageUrl = event.target.getAttribute("src");
            const largerImage = `<img src="${imageUrl}" alt="selected_image">`;
            imageSelect.innerHTML = largerImage;
            imageSelect.classList.add("active");
        }
    });

});
