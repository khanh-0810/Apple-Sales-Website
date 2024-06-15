document.addEventListener("DOMContentLoaded", initialState);

function initialState() {
    const url = window.location.href;
    const params = url.split('?');
    const productIdParams = params.length > 1 ? params[1] : '';

    const id = productIdParams.split('=').pop();

    let product = null;
    const productsListString = localStorage.getItem(TRENDING_PRODUCTS_KEY);

    if (productsListString) {
        const productsList = JSON.parse(productsListString);
        for (let i = 0; i < productsList.length; ++i) {
            if (productsList[i].id === Number(id)) {
                product = productsList[i];
                break;  // Dừng vòng lặp khi tìm thấy sản phẩm
            }
        }
    }

    if (!product) {
        console.error('Không tìm thấy sản phẩm');
        return;
    }

    const container = document.querySelector('#product-detail');
    if (!container) {
        console.error('Không tìm thấy container');
        return;
    }

    const productHTML = getProductDetail(product);
    container.innerHTML = productHTML;

    const relatedProductsContainer = document.querySelector('#related-products');
    if (!relatedProductsContainer) {
        return;
    }
    const relatedProductsHTML = getRelatedProducts(product.series);
    relatedProductsContainer.innerHTML = relatedProductsHTML;
}


function getProductDetail(product) {
    // ** Kiểm tra điều kiện
    if (!product) return;

    return `
        <div class="row centered">
            <div class="col-5 col-md-12 col-sm-12 mt-4">
                <div class="all-img mb-4">
                    <div class="row">
                        <div class="col-8 col-md-12 col-sm-12 centered">
                            <div class="img-max centered">
                                <img id="main-image" src="${product.images[0].url}" alt="${product.name}">
                            </div>
                        </div>
                        <div class="col-4 col-md-12 col-sm-12 centered">
                            <div class="img-min">
                                <div class="col-12 col-md-3 col-sm-3 phone-one centered mt-1" onClick="selectImageUrlByIndex(0)">
                                    <img class="thumbnail" src="${product.images[0].url}" alt="${product.name}">
                                </div>
                                <div class="col-12 col-md-3 col-sm-3 phone-twu centered mt-1" onClick="selectImageUrlByIndex(1)">
                                    <img class="thumbnail" src="${product.images[1].url}" alt="${product.name}">
                                </div>
                                <div class="col-12 col-md-3 col-sm-3 phone-three centered mt-1" onClick="selectImageUrlByIndex(2)">
                                    <img class="thumbnail" src="${product.images[2].url}" alt="${product.name}">
                                </div>
                                <div class="col-12 col-md-3 col-sm-3 phone-four centered mt-1" onClick="selectImageUrlByIndex(3)">
                                    <img class="thumbnail" src="${product.images[3].url}" alt="${product.name}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                                                              
            <div class="col-3 col-md-12 col-sm-12">
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="NameProduct centered">
                            <h2>${product.name}</h2>
                        </div>
                    </div>
                    <div class="col-12 mb-2">
                        <div class="version mb-1">
                            <h3>Version</h3>
                            <div class="select d-flex">
                                <div class="col-4 centered">
                                    <button><p>256GB</p></button>
                                </div>
                                <div class="col-4 centered">
                                    <button><p>512GB</p></button>
                                </div>
                                <div class="col-4 centered">
                                    <button><p>1TB</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-2">
                        <div class="color">
                            <h3>Màu sắc</h3>
                            <div class="select d-flex">
                                <div class="col-3 centered">
                                    <button class="centered">
                                        <i class='bx bxs-circle'></i>
                                    </button>
                                </div>
                                <div class="col-3 centered">
                                    <button class="centered">
                                        <i class='bx bxs-circle' style='color:rgba(131,129,129,0.25)'></i>
                                    </button>
                                </div>
                                <div class="col-3 centered">
                                    <button class="centered">
                                        <i class='bx bxs-circle' style='color:#4e4e71'></i>
                                    </button>
                                </div>
                                <div class="col-3 centered">
                                    <button class="centered">
                                        <i class='bx bxs-circle' style='color:#bdbd84'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mb-2">
                        <div class="price centered">
                            ${product.price} VND
                        </div>
                    </div>
                    <div class="col-12 mb-2 centered">
                        <div class="col-5 col-sm-6 centered">
                            <button class="buy-now">
                                <p>Mua ngay</p>
                            </button>
                        </div>
                        <div class="col-5 col-sm-6 centered">
                            <button onclick="addToCart(${product.id})" class="add-to-cart">
                                <i class='bx bx-cart-download'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8 col-md-12 col-sm-12 mb-4">
                <div class="offers">
                    <h2>Ưu đãi hấp dẫn</h2>
                    <p>- Giảm thêm 100.000 VND khi người thân đã mua hàng tại AppleStore</p>
                    <p>- Giảm thêm 1.000.000 VND khi nâng cấp thiết bị của bạn</p>
                    <p>- Giảm thêm 200.000 VND khi mua Apple Airpods | Apple Watch</p>
                    <p>- Giảm 5% tối đa 500k khi thanh toán trả góp qua Home Paylater</p>
                    <p>- Tặng ốp lưng và kính cường lực miễn phí trong 1 năm</p>
                </div>
            </div>
        </div>
    `;
}

function getRelatedProducts(series) {
    const availableProducts = JSON.parse(localStorage.getItem(TRENDING_PRODUCTS_KEY));

    let result = ``;

    const container = document.querySelector('#related-products');
    if (!container) return;

    for (let i = 0; i < availableProducts.length; ++i) {
        const productItem = availableProducts[i];
        if (productItem.series === series) {
            const productItemTemplate = getRelatedProductItem(productItem);
            result += productItemTemplate;
        }
    }

    return result;
}

function getRelatedProductItem(product) {
    if (!product)
        return;

    return `
        <div class="col-3 col-md-6 col-sm-6 product-one">
            <div class="row centered">
                <div class="col-12">
                    <img src="${product.images?.[0]?.url}" alt="${product.name}">
                </div>
                <div class="col-12">
                    <h3>${product.name}</h3>
                </div>
                <div class="col-12">
                    <a href="../../pages/auth/product-detail.html?id=${product.id}">See Details</a>
                </div>
            </div>
        </div>
    `;
}

function addToCart(productId) {

    console.log (productId);

    // ** Kiểm tra điều kiện
    if (!productId) return;
    /**
     * B1: Khai báo 1 biến để nhận dữ liệu
     * B2: Lấy danh sách sản phẩm hiện có trong localStorage
     * B3: Lặp qua danh sách sản phẩm tìm sản phẩm có id bằng với productId
     * B4: Gán sản phẩm tìm được cho biến ở bước 1
     **/
    let product;
    const productsList = JSON.parse(localStorage.getItem(TRENDING_PRODUCTS_KEY));
    for (let i = 0; i < productsList?.length; ++i) {
        if (productsList[i].id === productId) {
            product = productsList[i];
        }
    }

    const productsCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    let result = productsCart;

    const quantityElm = document.querySelector('#quantity');
    let quantity = 1;
    if (quantityElm) {
        quantity = quantityElm?.value || 1;
    }

    const isExisting = productsCart.findIndex(item => item.id === productId);
    if (isExisting > -1) {
        result = productsCart.map(item => {
            if (item.id === productId) {
                item.quantity = (item.quantity || 0) + (quantity || 1);
            }
            return item;
        });
    } else {
        product.quantity = quantity || 1;
        result.push(product);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(result));
    alert('Bạn đã thêm sản phẩm vào giỏ hàng!');
}
