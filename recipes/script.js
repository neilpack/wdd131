function renderRecipe(recipe) {
    // Access the container where the recipe will be displayed
    const recipeContainer = document.getElementById('recipe-container');
    
    // Create HTML structure
    const recipeHTML = `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}" width="200px" height="auto">
            <div id="recipe-info">
                <h1>${recipe.name}</h1>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${generateStars(recipe.rating)}
                </span>
                <p id="recipe-description"><strong>Description:</strong> ${recipe.description}</p>
                <ul>
                    ${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>
            </div>
            
        </div>
    `;
    
    // Add the recipe HTML to the container
    recipeContainer.innerHTML = recipeHTML;
}

function generateStars(rating) {
    const filledStars = '⭐'.repeat(rating); // Create filled stars
    const emptyStars = '☆'.repeat(5 - rating); // Create empty stars
    return filledStars + emptyStars;
}

// Render my recipe that I chose
renderRecipe(recipes[3]);