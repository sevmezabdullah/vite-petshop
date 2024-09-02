export function addToCart(cart, product) {
    const existingProduct = cart.find(item => item.id === product.id)
    if (existingProduct) {
        existingProduct.quantity += 1
    } else {
        cart.push({ ...product, quantity: 1 })
    }

}

export function removeFromCart(cart, productId) {
    const productIndex = cart.findIndex(item => item.id === productId)

    if (productIndex !== -1) {
        cart[productIndex].quantity -= 1
        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1)
        }
    }

}

export function renderCart(cart, removeFromCartHandler) {
    const cartItems = document.getElementById('cart-items')
    cartItems.innerHTML = ""
    let total = 0

    cart.forEach(item => {
        const cartItem = document.createElement('li')
        cartItem.textContent = `${item.name} - ${item.price} TL x ${item.quantity}`

        const removeButton = document.createElement('button')
        removeButton.textContent = "Sepetten Çıkar"
        removeButton.addEventListener('click', () => removeFromCartHandler(item.id))

        cartItem.appendChild(removeButton)
        cartItems.appendChild(cartItem)
        total += item.price * item.quantity
    })

    document.getElementById('cart-total').textContent = `Toplam Tutar : ${total} TL`

}