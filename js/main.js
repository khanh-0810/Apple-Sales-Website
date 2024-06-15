// console.debug('main.js is working')

function initialProducts() {
    // ** Get products list container element
    const container = document.querySelector('#product-list');
    if (!container) return;

    let result = `
        <div class="col-12 centered">
            <div class="bulkhead"></div>
        </div>
        <div class="col-12">
            <h2 class="centered">
                Featured Products
            </h2>
        </div>
    `;

    // ** Get list of trending products from localStorage and parse it to javascript object
    const productsListString = localStorage.getItem(TRENDING_PRODUCTS_KEY);
    const productsList = JSON.parse(productsListString);

    // ** Loop and get product item info
    for (let i = 0; i < productsList.length; ++i) {
        const productItem = getProductCard(productsList[i]);
        if (productItem) {
            result += productItem;
        }
    }

    if (!result || (result && result?.trim()?.length <= 0)) {
        return;
    }

    // ** Render products list into view
    container.innerHTML = result;
}


function initialProductsTwo() {
    // ** Get products list container element
    const container = document.querySelector('#product-list-2');
    if (!container) return;

    let result = `
        <div class="col-12 centered">
            <div class="bulkhead"></div>
        </div>
        <div class="col-12">
            <h2 class="centered">
                Best Seller
            </h2>
        </div>
    `;

    // ** Get list of trending products from localStorage and parse it to javascript object
    const productsListString = localStorage.getItem(TRENDING_PRODUCTS_KEY);
    const productsList = JSON.parse(productsListString);

    // ** Loop and get product item info
    for (let i = 0; i < productsList.length; ++i) {
        const productItem = getProductCard(productsList[i]);
        if (productItem) {
            result += productItem;
        }
    }

    if (!result || (result && result?.trim()?.length <= 0)) {
        return;
    }

    // ** Render products list into view
    container.innerHTML = result;
}


function initialAppState() {
    initialProducts();
    initialProductsTwo();
}

