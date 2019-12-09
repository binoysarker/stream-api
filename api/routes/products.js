const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'post for products'
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `single product ${id}`
  });
});
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `update single product ${id}`
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `delete single product ${id}`
  });
});

module.exports = router;
