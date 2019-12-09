const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get orders'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'post for orders'
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `single order ${id}`
  });
});
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `update single order ${id}`
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `delete single order ${id}`
  });
});

module.exports = router;
