
function currencyFormatter(amount) {
    if (!amount)
        return 0;
    
    return amount.toLocaleString('vi-VN', { currency: 'VND', style: 'currency' });
}

function url_img($url){
    if($url){
        let new_url = 'https://khanh-0810.github.io/Apple-Sales-Website/';
        return new_url + $url;
    }
    // return "Test";
}

const DEFAULT_SHIPPING_FEE = 30000;
    
function getProductCard(productFeatured) {
    if (!productFeatured || (typeof(productFeatured) !== 'object') || (productFeatured && Object.keys(productFeatured)?.length <= 0)) {
        return;
    }


    return `
        <div class="col-4 col-sm-6">
            <div class="product-one">
                <div class="row centered">
                    <div class="col-12">
                        <img src="${url_img(img)}" alt="${productFeatured.name}">
                    </div>
                    <div class="col-12">
                        <h3>${url_img("Test")}</h3>
                    </div>
                    <div class="col-12">
                        <a href="./pages/auth/Product-detail.html?id=${productFeatured.id}">See Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getProductCard(BestSeller) {
    if (!BestSeller || (typeof(BestSeller) !== 'object') || (BestSeller && Object.keys(BestSeller)?.length <= 0)) {
        return;
    }
    const img = BestSeller.images[0].url;


    return `
        <div class="col-4 col-sm-6">
            <div class="product-one">
                <div class="row centered">
                    <div class="col-12">
                        <img src="${url_img(img)}" alt="${BestSeller.name}">
                    </div>
                    <div class="col-12">
                        <h3>${BestSeller.name}</h3>
                    </div>
                    <div class="col-12">
                        <a href="./pages/auth/product-detail.html?id=${BestSeller.id}">See etails</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ** select
function decrease() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);

    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
}

function increase() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
}

function getCartItem(product) {
    // ** Check condition
    if (!product) return;

    return `
        <div class="cart-item">
            <div class="row">
                <div class="col-2 col-sm-6 img">
                <a href="../../pages/auth/product-detail.html?id=${product.id}">
                    <img src="../../${product.images[0].url}" alt="${product.name}">
                </a>
                </div>
                <div class="col-4 col-sm-6 information">
                    <h3>${product.name}</h3>
                    <p>Color: Space Black</p>
                    <p>Storage: 256GB</p>
                </div>
                <div class="col-2 col-sm-4 quantity">
                    <input type="text" id="quantity" value="${product.quantity || 1}"readonly>
                </div>
                <div class="col-2 col-sm-4 price">
                    <p>
                        ${currencyFormatter((product.price*product.quantity) ?? 0)}
                    </p>
                </div>
                <div class="col-2 col-sm-4 btn-remove">
                    <button onclick="removeCartItem(${product.id})" class="remove">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    `;
}


function getCartSubtotal() {

    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));

    let subtotal = 0;
    for (let i = 0; i < cart.length; ++i) {
        const cartItem = cart[i];
        const subtotalCartItem = cart[i].price * cart[i].quantity;

        subtotal += subtotalCartItem;
    }

    return `
        <div class="row">
            <div class="col-4 col-sm-6 column-one">
                <div class="subtotal">
                    <p>Subtotal</p>
                </div>
                <div class="tax">
                    <p>Tax</p>
                </div>
                <div class="total">
                    <p>Total</p>
                </div>
            </div>
            <div class="col-4 col-sm-6 column-twu">
                <div class="subtotal">
                    <p>${currencyFormatter(subtotal ?? 0)}</p>
                </div>
                <div class="tax">
                    <p>${currencyFormatter(DEFAULT_SHIPPING_FEE)}</p>
                </div>
                <div class="total">
                    <p>${currencyFormatter((subtotal ?? 0) + DEFAULT_SHIPPING_FEE)}</p>
                </div>
            </div> 
            <div class="col-4 col-sm-12 column-three">
                <div class="btn-one">
                    <button class="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
                <div class="btn-twu">
                    <button class="continue-shopping-btn">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    `;
}