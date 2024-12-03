//Add an onSale property to the data, and use it to conditionally render a span that says “On Sale!”

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: true,
    inventory: 5,
    // CHALLENGE
    onSale: true
  }
})

