const express = require('express');
const router = express.Router();
const data = require("../data");
const recipes = data.recipes;

router.get("/", async (req, res) => {
    try {
        let recipeList = await recipes.getAllRecipes();
        res.json(recipeList);
    } catch (err) {
        res.status(400).json(err);   
    }
});

router.get("/:id", async (req, res) => {
    try {
        let recipe = await recipes.getRecipeByID(req.params.id);
        res.json(recipe);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        let recipe = await recipes.addRecipe(req.body.title, req.body.ingredients, req.body.steps, req.body.comments);
        res.json(recipe);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        let updatedRecipe = await recipes.updateRecipe(req.params.id, req.body);
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).json(err);   
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await recipes.removeRecipe(req.params.id);
        res.status(200).json({message : "item deleted"});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;