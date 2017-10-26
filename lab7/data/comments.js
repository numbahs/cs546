const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require('node-uuid');
const recipes = require('./recipes');

let exportedMethods = {
    getAllCommentsInRecipe = async (recipeId) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } 
            let recipes = await lab7recipes(), recipe = await recipes.find({_id: recipeId}),
            { comments } = recipe, ret = {};
            comments.foreach((comment) => {
                ret.push({
                    _id: comment._id,
                    recipeId: recipeId,
                    recipeTitle: recipe.title,
                    poster: comment.poster,
                    comment: comment.comment
                });
            })
            return ret;
        } catch (err) {
            throw err;
        }
    },
    
    getCommentByCommentID = async (commentId) => {
        try {
            if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a commentId!`);
            }
            let recipes = await lab7recipes(), recipe = await recipes.find({comment : {_id : commentId}}),
            comment = recipe.comment, ret = {
                _id: comment._id,
                recipeId: recipe._id,
                recipeTitle: recipe.title,
                poster: comment.poster,
                comment: comment.comment
            };
        } catch (err) {
            throw err;
        }
    },

    addCommentToRecipe = async (recipeId, comment, poster) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } else if(typeof(poster) !== 'string') {
                throw TypeError(`${poster} is not a poster name!`);
            }
            let recipes = await lab7recipes(), recipe = await recipes.find({_id: recipeId}),
            ret = {
                _id : uuid.v4(),
                poster: poster,
                comment: comment
            }
            recipe.comments.push(ret);
            return ret;
        } catch (err) {
            throw err;
        }   
    },

    updateCommentInRecipe = async (recipeId, commentId, comment, poster) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } else if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a commentId!`);
            } else if(typeof(poster) !== 'string') {
                throw TypeError(`${poster} is not a poster name!`);
            } 
            let recipes = await lab7recipes(), 
            recipe = await recipes.find({_id: recipeId}),
            temp = await recipe.find({_id : commentId}), 
            ret = {
                _id : commentId,
                poster : poster,
                comment : comment
            }
            await recipe.updateOne({_id : commentId}, ret);
            return ret;
        } catch (err) {
            throw err;
        }
    },

    deleteCommentByID = async (commentId) => {
        try {
            if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a valid commentId!`);
            }
            let recipes = await lab7recipes(), recipe = await recipes.find({comment : {_id : commentId}});
            return await recipe.deleteOne({comment : {_id : commentId}});
        } catch (err) {
            throw err;
        }
    }
}

module.exports = exportedMethods;