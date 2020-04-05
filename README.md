# Project 6: Static Node and Express Site
A portfolio site that contains a Home page, an About page,  and a series of Project pages.

The data about (my) featured projects are stored in a JSON file.

Pug templates are filled out to utilize the JSON file to generate the markup that is ultimately displayed in the browser.

Node.js and Express are used to do the following:
  Import the required dependencies
  Link the JSON with the Pug templates
  Set up routes to handle requests
  Set up the middleware to utilize static files like CSS
  Handle errors
  Set up a server to serve the project
  
  Each project has static images as well as links for live viewing and the Github repository.
  You'll also learn a little bit about me on the About page.
  
  Live Project 6 link:
  https://tdegs-project6.herokuapp.com/
  
  ## Exceeds Expectations features:
  1) The package.json file was customized so that running 'npm start' will run the app.
  2) The use of error handling middleware to render a Pug template, including css to style the page appropriately.
  3) The overall website style is modified:
  * Color scheme is changed to navy profile sidebar background and headlines, buttons and live links changed to salmon (for lack of a better color description) and for corresponding hover state;
  * Profile image is round instead of square;
  * Headline font is changed to Coromant (serif), and all other type is the same Lato (san-serif) font.
  
