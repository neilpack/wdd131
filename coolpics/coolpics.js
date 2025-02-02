// DYNAMIC MENU JAVASCRIPT
const menuButton = document.querySelector(".menu"); 
const menuLinks = document.querySelector(".menu-links");

function toggleMenu() {
    menuLinks.classList.toggle("hide");
}

menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMenu();
});


// VIEW TEMPLATE JAVASCRIPT
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
              <button class="close-viewer">X</button>
              <img src="${pic}" alt="${alt}">
            </div>`;
}

function viewHandler(event) {
    const clickedImage = event.target;
    if (clickedImage.tagName !== 'IMG') return;

    // Get the src attribute from the clicked image and split it to get the base name
    const srcPath = clickedImage.src.split("-sm.jpeg")[0];

    // Construct the full-size image file name
    const fullImage = srcPath + "-full.jpeg";

    // Create the modal HTML by passing the full-size image path and alt text
    const modalHTML = viewerTemplate(fullImage, clickedImage.alt);

    // Insert the modal at the beginning of the body
    document.body.insertAdjacentHTML("afterbegin", modalHTML);

    // Add an event listener to the close button (X) to close the viewer
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
