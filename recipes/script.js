function renderRecipe(recipe) {
    // Access the container where the recipe will be displayed
    const recipeContainer = document.getElementById('recipe-container');
    
    // Create HTML structure
    const recipeHTML = `
        <div class="recipe">
            <h1>${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.name}" width="200px" height="auto">
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Published:</strong> ${recipe.datePublished}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            
            <h2>Ingredients:</h2>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h2>Instructions:</h2>
            <ol>
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            
            <h2>Rating:</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateStars(recipe.rating)}
            </span>
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