// Local recipe database list
const recipeDatabase = [
    {
        title: "Simple Chicken & Rice",
        ingredients: ["chicken", "rice"],
        instructions: "Cook rice. Sear chicken in a pan with salt and pepper. Combine and serve."
    },
    {
        title: "Garlic Broccoli Stir-Fry",
        ingredients: ["broccoli", "garlic"],
        instructions: "Sauté minced garlic in oil. Add broccoli florets and a splash of water. Cook until tender."
    },
    {
        title: "Chicken & Broccoli Bowl",
        ingredients: ["chicken", "broccoli", "rice", "garlic"],
        instructions: "Cook chicken and garlic. Steam broccoli. Serve over a warm bed of cooked rice."
    }
];

document.getElementById('generate-btn').addEventListener('click', () => {
    const inputText = document.getElementById('ingredients-input').value.toLowerCase();
    
    // Split input by commas and clean up white spaces
    const userIngredients = inputText.split(',').map(item => item.trim()).filter(item => item !== "");
    const container = document.getElementById('recipes-container');
    
    // Clear previous results
    container.innerHTML = "";

    if (userIngredients.length === 0) {
        container.innerHTML = '<p class="placeholder-text">Please enter at least one ingredient.</p>';
        return;
    }

    // Find recipes where the user has at least one matching ingredient
    const matchedRecipes = recipeDatabase.filter(recipe => {
        return recipe.ingredients.some(ing => userIngredients.includes(ing));
    });

    if (matchedRecipes.length === 0) {
        container.innerHTML = '<p class="placeholder-text">No recipes found matching those ingredients. Try adding chicken, rice, garlic, or broccoli!</p>';
        return;
    }

    // Render matched recipes to screen
    matchedRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Required:</strong> ${recipe.ingredients.join(', ')}</p>
            <p style="margin-top: 10px;"><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        container.appendChild(card);
    });
});
