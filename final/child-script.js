const photos = [
    { filename: "images/concert1.JPG", title: "In The Moment", description: "A vibrant live concert scene with colorful stage lights.", tags: ["music", "concert", "live"] },
    { filename: "images/concert2.JPG", title: "Behind The Concert", description: "A rock band performing in front of an energetic crowd.", tags: ["music", "rock", "performance", "live"] },
    { filename: "images/concert3.JPG", title: "Taco Bell Concert", description: "A festival stage lit up with an exciting atmosphere.", tags: ["concert", "music", "night", "live"] },
    { filename: "images/roommate1.JPG", title: "Roommate Fun", description: "Two roommates laughing together during a shoot.", tags: ["roommates", "friendship", "fun"] },
    { filename: "images/roommate2.JPG", title: "Friends", description: "Roommates lined up together.", tags: ["fun", "winter", "roommates"] },
    { filename: "images/roommate3.jpg", title: "Pumpkin Carving", description: "Roommates relaxing and having halloween fun.", tags: ["halloween", "pumpkin", "friends", "roommates"] },
    { filename: "images/couple1.jpeg", title: "Romantic Moment", description: "A couple enjoying their time together.", tags: ["love", "couple", "romance"] },
    { filename: "images/potrait1.jpeg", title: "Epic Moment", description: "A portrait on a river with dramatic lighting.", tags: ["portrait", "fun", "river"] },
    { filename: "images/hero0.JPG", title: "Standing Together", description: "Roommates standing around with a scenic backdrop.", tags: ["fun", "cinematic", "pose"] },
    { filename: "images/hero1.JPG", title: "My Favorite Missionary", description: "Missionary photo taken before serving a mission outside of an LDS temple.", tags: ["temple", "service", "mission", "sister"] },
    { filename: "images/hero2.JPG", title: "Senior Photo", description: "Someone standing on a bridge with a colorful background.", tags: ["senior", "nature", "colorful"] }
  ];

//Create HTML
function photoTemplate(photo) {
    return `
        <div class="photo">
            <img src="${photo.filename}" alt="${photo.title}" width="300px" height="auto" loading="lazy">
            <div class="photo-info">
                <h1>${photo.title}</h1>
                <p><strong>Description:</strong> ${photo.description}</p>
                <ul class="photo-tags">
                    ${tagsTemplate(photo.tags)}
                </ul>
            </div>
        </div>
    `;
}
//Render photo tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

//Search handler function
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredPhotos = filterPhotos(query);
    renderPhotos(filteredPhotos);
}
// Filter function to match the query in title, description, or tags
function filterPhotos(query) {
    const filtered = photos.filter(photo => {
        return photo.title.toLowerCase().includes(query) ||
               photo.description.toLowerCase().includes(query) ||
               (Array.isArray(photo.tags) && photo.tags.some(tag => tag.toLowerCase().includes(query)));
    });

    return filtered;
}
// Attach the search handler to the search button
document.getElementById('search-button').addEventListener('click', searchHandler);

function renderPhotos(photosArray = photos) {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = photosArray.map(photoTemplate).join('');
}

// Initial render of all photos
renderPhotos();

// Modal Viewer
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
              <button class="close-viewer">X</button>
              <img src="${pic}" alt="${alt}">
            </div>`;
}
function viewHandler(event) {
    const clickedImage = event.target;
    if (clickedImage.tagName !== 'IMG') return; // Ensure the clicked element is an image
    const modalHTML = viewerTemplate(clickedImage.src, clickedImage.alt); // Create the modal HTML by passing the full-size image path and alt text
    document.body.insertAdjacentHTML("afterbegin", modalHTML); // Insert the modal at the beginning of the body
    const closeButton = document.querySelector(".close-viewer"); // Add an event listener to the close button (X) to close the viewer
    closeButton.addEventListener("click", closeViewer);
}
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
document.querySelector("#photo-container").addEventListener("click", viewHandler);