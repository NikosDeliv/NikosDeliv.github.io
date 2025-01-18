// Get all image elements inside the art pieces
const artPieceImages = document.querySelectorAll('.art-piece img');

// Get the modal and the modal image element
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('closeModal');

// Loop through all images and set up event listeners
artPieceImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        // Open the modal and set the clicked image as the modal content
        modal.style.display = 'block';
        modalImg.src = event.target.src;  // Set the src of the modal image to the clicked image's src
        document.getElementById('caption').textContent = event.target.alt;  // Set the caption to the alt text of the image
    });
});

// Close the modal when the close button is clicked
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
