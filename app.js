const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
// ROUTES section
app.use('/products',productRoutes);
app.use('/orders', orderRoutes);

// error handeling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 400;
  next(error);
});

app.use((error,req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
