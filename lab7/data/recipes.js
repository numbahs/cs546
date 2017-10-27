const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes : async () => {
        try {
            let recipes = await lab7recipes(), allRecipes = await recipes.find({}).toArray(),
            retVals = [];
            allRecipes.forEach((recipe) => {
                retVals.push({ _id: recipe._id, title: recipe.title});
            })
            return retVals;
        } catch (err) {
            throw err;
        }
    },

    getRecipeByID : async (id) => {
        try {
            if(typeof(id) !== 'string') {
                throw TypeError(`${id} is not a valid id!`);
            }
            let recipes = await lab7recipes();
            return await recipes.findOne({_id : id});
        } catch (err) {
            throw err;
        }
    },

    addRecipe : async (title, ingredients, steps, comments) => {
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
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: comments
            }
            let recipes = await lab7recipes();
            await recipes.insertOne(recipe);
            
            return await recipes.findOne({ _id : recipe._id});
        } catch (err) {
            throw err;
        }
    },
    
    updateRecipe : async (id, updatedRecipe) => {
        try {
            if(typeof(id) !== 'string') {
                throw TypeError(`${id} is not a valid id!`);
            } 
            let setSet = {};
            if(updatedRecipe.title) {
                if(typeof(updatedRecipe.title) !== 'string') {
                    throw TypeError(`${updatedRecipe.title} is not a valid title!`);
                }
                setSet.title = updatedRecipe.title;
            } 
            if(updatedRecipe.ingredients) {
                if(!Array.isArray(updatedRecipe.ingredients)) {
                    throw TypeError(`${updatedRecipe.ingredients} is not a valid array of ingredients!`);
                }
                setSet.ingredients = updatedRecipe.ingredients;
            }
            if(updatedRecipe.steps) {
                if(!Array.isArray(updatedRecipe.steps)) {
                    throw TypeError(`${updatedRecipesteps} is not a valid array of steps!`);
                }
                setSet.steps = updatedRecipe.steps;
            }
            if(updatedRecipe.comments) {
                if(!Array.isArray(updatedRecipe.comments)) {
                    throw TypeError(`${updatedRecipe.comments} is not a valid array of comments!`);
                }
                setSet.comments = updatedRecipe.comments;
            }
            let recipes = await lab7recipes();
            await recipes.findOneAndUpdate({_id: id}, { $set: setSet });
            return await recipes.findOne({_id : id});
        } catch(err) {
            throw err;
        }
    },

    removeRecipe : async (id) => {
        try {
            if(typeof(id) !== 'string') {
                throw TypeError(`${id} is not a valid id!`);
            }
            let recipes = await lab7recipes();
            return await recipes.deleteOne({_id: id});
        } catch(err) {
            throw err;
        }
    }, 
}

module.exports = exportedMethods;