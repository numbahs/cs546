const express = require('express');
const router = express.Router();
const data = require("../data");
const recipes = data.recipes;

router.get("/", (req, res) => {
    try {
        let recipeList = await recipes.getAllRecipes();
        res.json(recipeList);
    } catch (err) {
        throw err;
    }
});

router.get("/:id", (req, res) => {
    try {
        let recipe = await recipes.getRecipeByID(req.params.id);
        res.json(recipe);
    } catch (err) {
        throw err;
    }
});

router.post("/", (req, res) => {
    try {
        await recipes.addRecipe(req.params.title, req.params.ingredients, req.params.steps, req.params.comments);
    } catch (err) {
        throw err;
    }
});

router.put("/:id", (req, res) => {
    try {
        let updatedRecipe = await recipes.updateRecipe(req.params.id);
        res.json(updatedRecipe);
    } catch (err) {
        throw err;
    }
});

router.delete("/:id", (req, res) => {
    try {
        await recipes.removeRecipe(req.params.id);
    } catch (err) {
        throw err;
    }
});