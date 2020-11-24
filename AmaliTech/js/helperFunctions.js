const userChoices = JSON.parse(localStorage.getItem('userChoices'));

// Event Handlers
function handleImageClick(event) {
  Array.from(domSelectors().imagesContainer.children).forEach((el) =>
    el.classList.remove('selected-image')
  );

  const imgSelected = event.target;
  imgSelected.classList.add('selected-image');

  const selectedImageUrl = imgSelected.currentSrc;
  userChoices.imageURL = selectedImageUrl;

  domSelectors().showcase.style.background = `url(${selectedImageUrl}) no-repeat center center`;
  domSelectors().showcase.style.backgroundSize = 'cover';

  data.forEach((entry) => {
    if (entry.url === selectedImageUrl) renderProductDetailsHTML(entry);
  });
}

function selectedColor(e) {
  // Remove any occurence of the active class in the elements
  Array.from(domSelectors().colorsHTML.children).forEach((el) =>
    el.classList.remove('active')
  );

  // Add the active class on the selected color
  e.target.classList.add('active');
}

function selectedSize(e) {
  Array.from(domSelectors().sizesHTML.children).forEach((el) =>
    el.classList.remove('active')
  );

  e.target.classList.add('active');
}

function changeInputValue(e) {
  const inputVal = document.querySelector('input.quantity');
  let value = parseInt(inputVal.value, 10);

  // Logic to check the click event handlers for the increment and decrement buttons
  if (value >= 1 || value < 9) {
    if (e.target.innerText === '+') value < 10 ? value++ : value;
    if (e.target.innerText === '-') value > 1 ? value-- : value;
  }

  inputVal.value = value;
}

function formSubmission(e) {
  e.preventDefault();

  userChoices.quantity = parseInt(domSelectors().inputVal.value);
  userChoices.price = parseInt(
    domSelectors().productPrice.innerText.split(' ')[1]
  );

  // Display an error message if the user doesn't choose a color else submit the form
  userChoices.color = domSelectors().selectedColor.style.backgroundColor;
  userChoices.size = domSelectors().selectedSize.innerText;
  userChoices.nameOfProduct = domSelectors().productName.innerText;

  // console.log(userChoices.size);

  if (userChoices.color && userChoices.size) {
    localStorage.setItem('userChoices', JSON.stringify(userChoices));
    location.href = `${location.origin}/cart.html`;
  }

  console.log('Form has been submitted');
}

// Helper Functions
function renderProductDetailsHTML({
  productName,
  price,
  description,
  colors,
  sizes,
}) {
  domSelectors().productName.innerText = productName;
  domSelectors().productPrice.innerHTML = `GH<span>&cent;</span> ${price}`;
  domSelectors().productDescription.innerText = description;
  domSelectors().colorsHTML.innerHTML = colors
    .map((color) => `<li style="background-color: ${color}"></li>`)
    .join('');
  domSelectors().sizesHTML.innerHTML = sizes
    .map((size) => `<li>${size}</li>`)
    .join('');
}
