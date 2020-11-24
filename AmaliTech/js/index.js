// Loading the data from startup.js
const data = JSON.parse(localStorage.getItem('data'));
console.log(domSelectors().imgs);

let counter = 0;

// Setting the src attributes to all the images and click handlers to each element
domSelectors().imgs.forEach((img) => {
  if (!img.hasAttribute('src')) img.setAttribute('src', data[counter].url);
  counter++;

  // Attaching a click handler to each image
  img.addEventListener('click', handleImageClick);
});

// Populate the page upon the initial reload
renderProductDetailsHTML(data[0]);

// Event Handlers
domSelectors().form.addEventListener('click', changeInputValue);
domSelectors().colorsHTML.addEventListener('click', selectedColor);
domSelectors().sizesHTML.addEventListener('click', selectedSize);
domSelectors().form.addEventListener('submit', formSubmission);
