const express = require('express');

const { getAll, get, add, replace, remove, getRandom, getTitles } = require('../data/recipe');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const recipes = await getAll();
    res.json({ recipes: recipes });
  } catch (error) {
    next(error);
  }
});

router.get('/random', async (req, res, next) => {
  try {
    const recipe = await getRandom();
    res.json({ recipe });
  } catch (error) {
    next(error);
  }
});

router.get('/titles', async (req, res, next) => {
  try {
    const titles = await getTitles();
    res.json({ titles });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await get(req.params.id);
    res.json({ recipe });
  } catch (error) {
    next(error);
  }
});


router.post('/', async (req, res, next) => {
  const data = req.body;
  try {
    await add(data);
    res.status(201).json({ message: 'Recipe saved.', recipe: data })
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;
  try {
    await replace(req.params.id, data);
    res.json({ message: 'Recipe updated.', recipe: data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Recipe deleted.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;