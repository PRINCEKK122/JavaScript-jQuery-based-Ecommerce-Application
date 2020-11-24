function domSelectorsCart() {
  return {
    productName: document.querySelector('.table__prod_cont .product_name'),
    productColor: document.querySelector(
      '.list-h.bag_styles .productsummary_style.color'
    ),
    productSize: document.querySelector(
      '.list-h.bag_styles .productsummary_style.size'
    ),
    productQuantity: document.querySelector(
      '.table__item-content .dropdown-cont'
    ),
    unitPrice: document.querySelector('.table__prod_cont .unit_amount'),
    totalPrice: document.querySelector('.total_price'),
    imageUrl: document.querySelector('.img-cont img'),
    subTotal: document.querySelector('.estimate-cont .total'),
    estimatedTotal: document.querySelector('.estimate-cont .estimated'),
  };
}
