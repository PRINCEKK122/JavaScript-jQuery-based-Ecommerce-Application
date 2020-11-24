window.addEventListener(
  'DOMContentLoaded',
  () =>
    localStorage.setItem(
      'data',
      JSON.stringify([
        {
          url:
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          productName: 'Shirt',
          price: 20,
          description: 'Nice shirts!',
          colors: ['grey', 'lightblue', 'black'],
          sizes: ['S', 'M', 'L', 'XL'],
        },
        {
          url:
            'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          productName: 'Trousers',
          price: 15,
          description: 'Nice Trousers!',
          colors: ['pink', 'violet', 'red'],
          sizes: ['M', 'L', 'XL'],
        },
        {
          url:
            'https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1699&q=80',
          productName: 'Fos bail',
          price: 300,
          description: 'I love these clothes!',
          colors: ['brown', 'orange', 'lightgreen'],
          sizes: ['S', 'L'],
        },
      ])
    ),

  localStorage.setItem(
    'userChoices',
    JSON.stringify({
      color: null,
      price: 0,
      size: null,
      quantity: 0,
      nameOfProduct: null,
      imageURL: null,
    })
  )
);
