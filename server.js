const express = require('express');
const app = express();
const { JSDOM } = require("jsdom");

const port = process.env.PORT || 3000; // Use the provided port by Heroku or default to 3000

app.use(express.static(__dirname));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Functions for the website

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
global.document = dom.window.document;

document.addEventListener("DOMContentLoaded", function() {
  // Get all the navigation links
  var navLinks = document.querySelectorAll("nav ul li a");

  // Attach click event listeners to each link
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      // Get the target section from the href attribute
      var targetSection = document.querySelector(link.getAttribute("href"));

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
  
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });