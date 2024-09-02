export function createProductItem({ id, name, description, price, image }, addToCart) {

    const item = document.createElement('div')
    item.classList.add('product-item')

    item.innerHTML = `<img src="${image}" alt="${name}">
    <h2>${name}</h2>
    <p>${description}</p>
    <p><strong>Fiyat :</strong> ${price} TL</p>
    <button>Sepete Ekle</button>`

    item.querySelector('button').addEventListener('click', () => {
        addToCart({ id, name, description, price, image })
    })
    return item
}