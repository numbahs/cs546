const express = require('express');
const router = express.Router();
const data = require("../data");
const comments = data.comments;

router.get("/recipe/:recipeId", async (req, res) => {
    try {
        let commentList = await comments.getAllCommentsInRecipe(req.params.recipeId);
        res.json(commentList);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:commentId", async (req, res) => {
    try {
        let comment = await comments.getCommentByCommentID(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/:recipeId", async (req, res) => {
    try {
        let comment = await comments.addCommentToRecipe(req.params.recipeId, req.body);
        res.json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:recipeId/:commentId", async (req, res) => {
    try {
        let comment = await comments.updateCommentInRecipe(req.params.recipeId, req.params.commentId, req.body);
        res.json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await comments.deleteCommentByID(req.params.id);
        res.status(200).json({message : "delete"});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;