import './styles/style.css'

import { renderProductList } from './components/productList'
import { renderCart, addToCart, removeFromCart } from './components/cart'
const API_URL = 'http://localhost:3000/products'

// Sepetimiz
let cart = []


// Servisten gelen ürünler listeleniyor
async function fetchProducts(category = 'all') {
  const response = await fetch(API_URL)
  const products = await response.json()
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category)

  renderProductList(filteredProducts, addToCartHandler)
}


// Sepete ürün ekleme ele alınıyor
function addToCartHandler(product) {
  addToCart(cart, product)
  renderCart(cart, removeFromCartHandler)
}

function removeFromCartHandler(productId) {
  removeFromCart(cart, productId)
  renderCart(cart, removeFromCartHandler)
}


document.addEventListener('DOMContentLoaded', () => {
  fetchProducts()
  document.getElementById('category-filter').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const category = event.target.getAttribute('data-category')
      fetchProducts(category)
    }
  })
})

