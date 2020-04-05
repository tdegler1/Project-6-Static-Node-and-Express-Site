const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
app.use(mainRoutes);

// If no pages (routes) are found, then throw an error.
app.use((req, res, next) => {
  const err = new Error('Oh Dear, the requested page was not found.');
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.error("Oops, there was an error getting the resource: ", err.message);
  console.error("Status Code: ", err.status);
  console.error("Stack Trace: ", err.stack);
  res.render("error", err);
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log('The application is running!')
});
