const express = require('express')
const router = express.Router()
const articles = require('./../models/articles')

router.get('/new', (req, res) => {
    res.render('articles/new')
})
router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        post: req.body.post,
    })
    try {
       article = await article.save()
       res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', {article: article})
}})

module.exports = router