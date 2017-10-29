const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require('node-uuid');
const recipesData = require('./recipes');

let exportedMethods = {
    getAllCommentsInRecipe : async (recipeId) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } 
            let recipes = await lab7recipes(), recipe = await recipes.findOne({_id: recipeId}),
            ret = [];
            recipe.comments.forEach((comment) => {
                ret.push({
                    _id: comment._id,
                    recipeId: recipe._id,
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
    
    getCommentByCommentID : async (commentId) => {
        try {
            if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a commentId!`);
            }
            let recipes = await lab7recipes(), recipe = await recipes.findOne({"comments._id" : commentId}),
            match = {};
            recipe.comments.forEach((comment) => {
                if(comment._id === commentId) {
                    return (match = {
                        _id: comment._id,
                        recipeId: recipe._id,
                        recipeTitle: recipe.title,
                        poster: comment.poster,
                        comment: comment.comment
                    });
                };
            });
            return match;
        } catch (err) {
            throw err;
        }
    },

    addCommentToRecipe : async (recipeId, comment) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } 
            if(typeof(comment.poster) !== 'string') {
                throw TypeError(`${poster} is not a poster name!`);
            }
            let recipes = await lab7recipes(),
            ret = {
                _id : uuid.v4(),
                poster: comment.poster,
                comment: comment.comment
            }
            await recipes.findOneAndUpdate({_id : recipeId}, { $addToSet : {"comments" : ret }});
            return ret;
        } catch (err) {
            throw err;
        }   
    },

    updateCommentInRecipe : async (recipeId, commentId, updatedComment) => {
        try {
            if(typeof(recipeId) !== 'string') {
                throw TypeError(`${recipeId} is not a recipeId!`);
            } else if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a commentId!`);
            } 
            let recipes = await lab7recipes();
            setSet = {};
            if(updatedComment.comment) {
                if(typeof(updatedComment.comment) !== 'string') {
                    throw TypeError(`${updatedComment.comment} is not a valid comment!`);
                }
                setSet["comments.$.comment"] = updatedComment.comment;
            }
            if(updatedComment.poster) {
                if(typeof(updatedComment.poster) !== 'string') {
                    throw TypeError(`${updatedComment.poster} is not a valid poster!`);
                }
                setSet["comments.$.poster"] = updatedComment.poster;
            }
            await recipes.findOneAndUpdate({_id : recipeId, "comments._id" : commentId}, {$set : setSet});
            return await recipes.findOne({_id : recipeId, "comments._id" : commentId});
        } catch (err) {
            throw err;
        }
    },

    deleteCommentByID : async (commentId) => {
        try {
            if(typeof(commentId) !== 'string') {
                throw TypeError(`${commentId} is not a valid commentId!`);
            }
            let recipes = await lab7recipes();
            return await recipes.findOneAndUpdate({"comments._id" : commentId}, {$pull : 
                {'comments' : {_id : commentId}}});
        } catch (err) {
            throw err;
        }
    }
}

module.exports = exportedMethods;