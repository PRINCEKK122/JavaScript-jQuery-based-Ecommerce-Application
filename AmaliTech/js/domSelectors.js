function domSelectors() {
  const showContentDetails = document.querySelector('.show-content-details');

  return {
    form: document.querySelector('form.form-input'),
    imagesContainer: document.querySelector('.all-images'),
    imgs: document.querySelectorAll('.all-images img'),
    showcase: document.querySelector('.showcase'),
    showContentDetails,
    productName: showContentDetails.querySelector('.product-name'),
    productPrice: showContentDetails.querySelector('.product-price'),
    productDescription: showContentDetails.querySelector(
      '.product-description'
    ),
    inputVal: document.querySelector('input.quantity'),
    colorsHTML: showContentDetails.querySelector('.color .color-types'),
    sizesHTML: showContentDetails.querySelector('.sizes'),
    selectedColor: showContentDetails.querySelector(
      '.color .color-types .active'
    ),
    selectedSize: showContentDetails.querySelector('.size .sizes .active'),
    displayColorError: document.querySelector('.color span'),
    displaySizeError: document.querySelector('.size span'),
  };
}
