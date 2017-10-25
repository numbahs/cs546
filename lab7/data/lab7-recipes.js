const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require('node-uuid');

async function getAllRecipes() {
    try {
        let recipes = await lab7recipes();
        return await recipes.find({}).toArray();
    } catch (err) {
        throw err;
    }
}

async function getRecipeByID(id) {
    try {
        let recipes = await lab7recipes();
        return await recipes.find({_id : id});
    } catch (err) {
        throw err;
    }
}

async function addRecipe(title, ingredients, steps, comments) {
    try {
        if(typeof(title) !== 'string') {
            throw TypeError(`${title} is not a valid title!`);
        } else if(!Array.isArray(ingredients)) {
            throw TypeError(`${ingredients} is not a valid array of ingredients!`);
        } else if(!Array.isArray(steps)) {
            throw TypeError(`${steps} is not a valid array of steps!`);
        } else if(!Array.isArray(comments)) {
            throw TypeError(`${comments} is not a valid array of comments!`);
        }
        let recipe = {
            _id: uuidv4(),
            title: title,
            ingredients: ingredients,
            steps: steps,
            comments: comments
        }
        let recipes = await lab7recipes();
        await recipes.insertOne(recipe);
        return recipe;
    } catch (err) {
        throw err;
    }
}

async function updateRecipe(id, title, ingredients, steps, comments) {
    try {
        if(typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        } else if(typeof(title) !== 'string') {
            throw TypeError(`${title} is not a valid title!`);
        } else if(!Array.isArray(ingredients)) {
            throw TypeError(`${ingredients} is not a valid array of ingredients!`);
        } else if(!Array.isArray(steps)) {
            throw TypeError(`${steps} is not a valid array of steps!`);
        } else if(!Array.isArray(comments)) {
            throw TypeError(`${comments} is not a valid array of comments!`);
        }
        let updatedRecipe = {
            _id : id,
            title : title,
            ingredients: ingredients,
            steps: steps,
            comments: comments
        }
        let recipes = await lab7recipes();
        recipes.updateOne({_id: id}, updatedRecipe);
        return await getRecipeByID(id);
    } catch(err) {
        throw err;
    }
}

async function removeRecipe(id) {
    try {
        if(typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        let recipes = await lab7recipes();
        return await recipes.deleteOne({_id: id});
    } catch(err) {
        throw err;
    }
}