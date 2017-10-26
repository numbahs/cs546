const express = require('express');
const router = express.Router();
const data = require("../data");
const comments = data.comments;

router.get("/recipe/:recipeId", (req, res) => {
    try {
        let commentList = await comments.getAllCommentsInRecipe(req.params.recipeId);
        res.json(commentList);
    } catch (err) {
        throw err;
    }
});

router.get("/:commentId", (req, res) => {
    try {
        let comment = await comments.getCommentByCommentID(req.params.commentId);
        res.json(comment);
    } catch (err) {
        throw err;
    }
});

router.post("/:recipeId", (req, res) => {
    try {
        let comment = await comments.addCommentToRecipe(req.params.commentId, req.params.comment, req.params.poster);
        res.json(comment);
    } catch (err) {
        throw err;
    }
});

router.put("/:recipeId/:commentId", (req, res) => {
    try {
        let comment = await comments.updateCommentInRecipe(req.params.recipeId, req.params.commentId, req.params.comment, req.params.poster);
        res.json(comment);
    } catch (err) {
        throw err;
    }
});

router.delete("/:id", (req, res) => {
    try {
        await comments.deleteCommentByID(req.params);
    } catch (err) {
        throw err;
    }
});