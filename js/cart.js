const CART_STORAGE_KEY = 'cart';

function initialCartState() {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    let result = `
        <h2>Shopping Cart (${cart.length ?? 0})</h2>
    `;

    const container = document.querySelector('#cart-list-container');
    if (!container) return;

    for (let i = 0; i < cart.length; ++i) {
        const productItem = cart[i];
        const productItemTemplate = getCartItem(productItem);

        result += productItemTemplate;
    }

    container.innerHTML = result;

    // ** Render subtotal value
    initialCartSubtotal();
}

function initialCartSubtotal() {
    const container = document.querySelector('#cart-subtotal');
    if (!container) return;

    const result = getCartSubtotal();
    container.innerHTML = result;
}

function removeCartItem(productId) {
    // ** Check condition
    if (!productId) return;

    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    const tmp = cart.filter(item => item.id !== productId);

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(tmp));
    alert('Bạn Chắc Muốn Xóa Sản Phẩm!');

    // ** Re-render cart component
    initialCartState();
}
