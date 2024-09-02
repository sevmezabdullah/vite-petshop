import { createProductItem } from "./productItem";


export function renderProductList(products, addToCart) {
    const app = document.getElementById('app')
    const existingList = document.querySelector('.product-list')
    if (existingList) {
        existingList.remove()
    }
    const productList = document.createElement('div')
    productList.classList.add('product-list')
    products.forEach(product => {
        const productItem = createProductItem(product, addToCart)
        productList.appendChild(productItem)
    });
    app.appendChild(productList)

}