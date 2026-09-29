// Expanded local recipe database list
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
    },
    {
        title: "Classic Tomato Pasta",
        ingredients: ["pasta", "tomato", "garlic"],
        instructions: "Boil pasta. In a pan, simmer crushed tomatoes and minced garlic with olive oil. Toss pasta in the sauce."
    },
    {
        title: "Easy Beef Tacos",
        ingredients: ["beef", "tortilla", "cheese"],
        instructions: "Brown the ground beef in a skillet. Warm your tortillas, then assemble with beef and shredded cheese."
    },
    {
        title: "Scrambled Eggs & Toast",
        ingredients: ["egg", "bread", "butter"],
        instructions: "Toast your bread and spread butter. Whisk eggs and scramble them in a warm pan until fluffy. Serve together."
    },
    {
        title: "Quick Caprese Salad",
        ingredients: ["tomato", "cheese"],
        instructions: "Slice tomatoes and fresh cheese (like mozzarella). Layer them on a plate and drizzle with olive oil and salt."
    },
    {
        title: "French Toast",
        ingredients: ["egg", "bread", "milk"],
        instructions: "Whisk egg and a splash of milk together. Dip bread slices into the mixture and fry in a pan until golden brown on both sides."
    },
    {
        title: "Banana Peanut Butter Snack",
        ingredients: ["banana", "peanut butter"],
        instructions: "Slice the banana in half lengthwise or into coins, then spread peanut butter over the top."
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
        container.innerHTML = '<p class="placeholder-text">No recipes found matching those ingredients. Try entering chicken, rice, pasta, egg, beef, or tomato!</p>';
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
