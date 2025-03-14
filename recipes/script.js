function renderRecipe(recipe) {
    const recipeContainer = document.getElementById('recipe-container');
    const recipeHTML = recipeTemplate(recipe);
    recipeContainer.innerHTML = recipeHTML; // Add the recipe HTML to the container
}

function getRandomNumber(num) {
    return Math.floor(Math.random() * num); // Generates a random number >= 0 and < num
}

function generateStars(rating) {
    const filledStars = '⭐'.repeat(rating); // Create filled stars
    const emptyStars = '☆'.repeat(5 - rating); // Create empty stars
    return `${filledStars}${emptyStars}`; // Generate star rating
}

function generateTags(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join(''); // Generates a list of tags
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById('recipe-container');
    
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    
    recipeContainer.innerHTML = recipeHTML;
}

function getRandomListEntry(list) {
    return list[getRandomNumber(list.length)];
}

function init() {
    // random recipe
    const recipe = getRandomListEntry(recipes);
    // Render the random recipe using renderRecipes
    renderRecipes([recipe]);
}


// renderRecipe(recipes[3]);
function renderRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    renderRecipe(recipes[randomIndex]); // Render the random recipe
}


// TEMPLATE FUNCTIONS
function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.name}" width="200px" height="auto">
            <div id="recipe-info">
                <h1>${recipe.name}</h1>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingTemplate(recipe.rating)} <!-- Call ratingTemplate here -->
                </span>
                <p id="recipe-description"><strong>Description:</strong> ${recipe.description}</p>
                <ul class="recipe__tags">
                    ${tagsTemplate(recipe.tags)} <!-- Call tagsTemplate here -->
                </ul>
            </div>
        </div>
    `;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`; // Filled star
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`; // Empty star
        }
    }

    html += `</span>`;
    return html;
}





// Search handler function
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    
    const filteredRecipes = filterRecipes(query);
    
    renderRecipes(filteredRecipes);
}

// Filter function to match the query in name, description, tags, or ingredients
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        // Check if tags and ingredients are defined and are arrays before calling .some()
        return recipe.name.toLowerCase().includes(query) ||
               recipe.description.toLowerCase().includes(query) ||
               (Array.isArray(recipe.tags) && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||
               (Array.isArray(recipe.ingredients) && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)));
    });

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}


// Attach the search handler to the search button
document.getElementById('search-button').addEventListener('click', searchHandler);
// Running
window.onload = init;