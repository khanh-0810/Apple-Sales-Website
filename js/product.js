document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem(TRENDING_PRODUCTS_KEY)); // Sử dụng hàm getProductData từ database.js

    const seriesContainers = document.querySelectorAll('.main .col-12');

    seriesContainers.forEach(seriesContainer => {
        const seriesId = seriesContainer.id;
        const seriesNumber = parseInt(seriesId.split('-')[1]); // Lấy số series từ id

        const productsInSeries = products.filter(product => product.series === seriesNumber);
        const productList = seriesContainer.querySelector('.row');

        productsInSeries.forEach(product => {
            const productHTML = `
                <div class="col-3 col-md-6 col-sm-6">
                    <div class="product-one">
                        <div class="row centered">
                            <div class="col-12">
                                <img src="${product.images[0].url}" alt="${product.name}">
                            </div>
                            <div class="col-12 col-md-12 col-sm-12 centered">
                                <h3>${product.name}</h3>
                            </div>
                            <div class="col-12">
                                <a href="../../pages/auth/product-detail.html?id=${product.id}">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productList.insertAdjacentHTML('beforeend', productHTML);
        });
    });
});
