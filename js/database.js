const IP_15_SERIES = 15;
const IP_14_SERIES = 14;
const IP_13_SERIES = 13;
const IP_12_SERIES = 12;
const IP_11_SERIES = 11;

const color = [
    
]

const trendingProducts = [
    // ** IPHONE 15 SERIES
    {
        id: 1,
        series: IP_15_SERIES,
        name: "IPhone 15 Pro Max",
        images: [
            { id: 1 - 1, url: "../../assets/img/IP-15/anh1.png" },
            { id: 1 - 2, url: "../../assets/img/IP-15/anh2.png" },
            { id: 1 - 3, url: "../../assets/img/IP-15/anh3.png" },
            { id: 1 - 4, url: "../../assets/img/IP-15/anh4.png" }
        ],
        description: "This is IPhone 15 Pro Max.",
        price: 30000000,
        color: ["#48488e", "black", "#bdbd84", "rgba(191,191,197,0.4)"]
    },
    {
        id: 2,
        series: IP_15_SERIES,
        name: "IPhone 15 Pro",
        images: [
            { id: 2 - 1, url: "assets/img/IP-15/anh4.png" },
            { id: 2 - 2, url: "assets/img/IP-15/anh3.png" },
            { id: 2 - 3, url: "assets/img/IP-15/anh2.png" },
            { id: 2 - 4, url: "assets/img/IP-15/anh1.png" }
        ],
        description: "This is IPhone 15 Pro.",
        price: 28000000,
        color: ["rgba(191,191,197,0.4)", "#bdbd84", "black", "#48488e"]

    },
    {
        id: 3,
        series: IP_15_SERIES,
        name: "IPhone 15 Plus",
        images: [
            { id: 3 - 1, url: "../../assets/img/IP-15/anh4-2.png" },
            { id: 3 - 2, url: "../../assets/img/IP-15/anh3-2.png" },
            { id: 3 - 3, url: "../../assets/img/IP-15/anh2-2.png" },
            { id: 3 - 4, url: "../../assets/img/IP-15/anh1-2.png" }
        ],
        description: "This is IPhone 15 Plus.",
        price: 25000000,
        color: ["rgba(157,207,253,0.4)", "rgba(172,253,157,0.4)", "rgba(16,16,16,0.61)", "#fdb1b2"]
    },
    {
        id: 4,
        series: IP_15_SERIES,
        name: "IPhone 15",
        images: [
            { id: 4 - 1, url: "../../assets/img/IP-15/anh1-2.png" },
            { id: 4 - 2, url: "../../assets/img/IP-15/anh2-2.png" },
            { id: 4 - 3, url: "../../assets/img/IP-15/anh3-2.png" },
            { id: 4 - 4, url: "../../assets/img/IP-15/anh4-2.png" }
        ],
        description: "This is IPhone 15.",
        price: 22000000,
        color: ["#fdb1b2", "rgba(16,16,16,0.61)", "rgba(172,253,157,0.4)", "rgba(157,207,253,0.4)"]
    },

    // ** IPHONE 14 SERIES
    {
        id: 5,
        series: IP_14_SERIES,
        name: "IPhone 14 Pro Max",
        images: [
            { id: 5 - 1, url: "../../assets/img/IP-14/anh1.png" },
            { id: 5 - 2, url: "../../assets/img/IP-14/anh2.png" },
            { id: 5 - 3, url: "../../assets/img/IP-14/anh3.png" },
            { id: 5 - 4, url: "../../assets/img/IP-14/anh4.png" }
        ],
        description: "This is IPhone 14 Pro Max.",
        price: 36000000,
        color: ["rgba(101,57,105,0.94)", "rgba(191,191,197,0.4)", "rgba(30,30,28,0.94)", "rgba(221,234,88,0.94)"]
    },
    {
        id: 6,
        series: IP_14_SERIES,
        name: "IPhone 14 Pro",
        images: [
            { id: 6 - 1, url: "../../assets/img/IP-14/anh4.png" },
            { id: 6 - 2, url: "../../assets/img/IP-14/anh3.png" },
            { id: 6 - 3, url: "../../assets/img/IP-14/anh2.png" },
            { id: 6 - 4, url: "../../assets/img/IP-14/anh1.png" }
        ],
        description: "This is IPhone 14 Pro.",
        price: 28000000,
        color: ["rgba(221,234,88,0.94)", "rgba(30,30,28,0.94)", "rgba(191,191,197,0.4)", "rgba(101,57,105,0.94)"]
    },
    {
        id: 7,
        series: IP_14_SERIES,
        name: "IPhone 14 Plus",
        images: [
            { id: 7 - 1, url: "../../assets/img/IP-14/anh1-2.png" },
            { id: 7 - 2, url: "../../assets/img/IP-14/anh2-2.png" },
            { id: 7 - 3, url: "../../assets/img/IP-14/anh3-2.png" },
            { id: 7 - 4, url: "../../assets/img/IP-14/anh4-2.png" }
        ],
        description: "This is IPhone 14 Plus.",
        price: 25000000,
        color: ["#B49FBD", "back", "rgba(191,191,197,0.4)", "#9FACBD",]
    },
    {
        id: 8,
        series: IP_14_SERIES,
        name: "IPhone 14",
        images: [
            { id: 8 - 1, url: "../../assets/img/IP-14/anh4-2.png" },
            { id: 8 - 2, url: "../../assets/img/IP-14/anh3-2.png" },
            { id: 8 - 3, url: "../../assets/img/IP-14/anh2-2.png" },
            { id: 8 - 4, url: "../../assets/img/IP-14/anh1-2.png" }
        ],
        description: "This is IPhone 14.",
        price: 22000000,
        color: ["#9FACBD", "rgba(191,191,197,0.4)", "back", "#B49FBD"]
    },

    // ** IPHONE 13 SERIES
    {
        id: 9,
        series: IP_13_SERIES,
        name: "IPhone 13 Pro Max",
        images: [
            { id: 9 - 1, url: "../../assets/img/IP-13/anh1.png" },
            { id: 9 - 2, url: "../../assets/img/IP-13/anh2.png" },
            { id: 9 - 3, url: "../../assets/img/IP-13/anh3.png" },
            { id: 9 - 4, url: "../../assets/img/IP-13/anh4.png" }
        ],
        description: "This is IPhone 13 Pro Max.",
        price: 36000000,
        color: ["#E6F300", "#00ACF3", "#232425", "#588758",]
    },
    {
        id: 10,
        series: IP_13_SERIES,
        name: "IPhone 13 Pro",
        images: [
            { id: 10 - 1, url: "../../assets/img/IP-13/anh4.png" },
            { id: 10 - 2, url: "../../assets/img/IP-13/anh3.png" },
            { id: 10 - 3, url: "../../assets/img/IP-13/anh2.png" },
            { id: 10 - 4, url: "../../assets/img/IP-13/anh1.png" }
        ],
        description: "This is IPhone 13 Pro.",
        price: 28000000,
        color: [ "#588758","#E6F300", "#00ACF3", "#232425",]
    },
    {
        id: 11,
        series: IP_13_SERIES,
        name: "IPhone 13",
        images: [
            { id: 11 - 1, url: "../../assets/img/IP-13/anh1-2.png" },
            { id: 11 - 2, url: "../../assets/img/IP-13/anh2-2.png" },
            { id: 11 - 3, url: "../../assets/img/IP-13/anh3-2.png" },
            { id: 11 - 4, url: "../../assets/img/IP-13/anh4-2.png" }
        ],
        description: "This is IPhone 13.",
        price: 25000000,
        color: [ "#000000","#33708F", "rgba(191,191,197,0.4)", "#ec88f0",]
    },
    {
        id: 12,
        series: IP_13_SERIES,
        name: "IPhone 13 Mini",
        images: [
            { id: 12 - 1, url: "../../assets/img/IP-13/anh4-2.png" },
            { id: 12 - 2, url: "../../assets/img/IP-13/anh3-2.png" },
            { id: 12 - 3, url: "../../assets/img/IP-13/anh2-2.png" },
            { id: 12 - 4, url: "../../assets/img/IP-13/anh1-2.png" }
        ],
        description: "This is IPhone 13 Mini.",
        price: 22000000,
        color: [ "#ec88f0","rgba(191,191,197,0.4)","#33708F","#000000"]
    },

    // ** IPHONE 12 SERIES
    {
        id: 13,
        series: IP_12_SERIES,
        name: "IPhone 12 Pro Max",
        images: [
            { id: 13 - 1, url: "../../assets/img/IP-12/anh1.png" },
            { id: 13 - 2, url: "../../assets/img/IP-12/anh2.png" },
            { id: 13 - 3, url: "../../assets/img/IP-12/anh3.png" },
            { id: 13 - 4, url: "../../assets/img/IP-12/anh4.png" }
        ],
        description: "This is IPhone 12 Pro Max.",
        price: 36000000,
        color: [ "#000000","#33708F","#F0E95F","rgba(191,191,197,0.4)"]
    },
    {
        id: 14,
        series: IP_12_SERIES,
        name: "IPhone 12 Pro",
        images: [
            { id: 14 - 1, url: "../../assets/img/IP-12/anh4.png" },
            { id: 14 - 2, url: "../../assets/img/IP-12/anh3.png" },
            { id: 14 - 3, url: "../../assets/img/IP-12/anh2.png" },
            { id: 14 - 4, url: "../../assets/img/IP-12/anh1.png" }
        ],
        description: "This is IPhone 12 Pro.",
        price: 28000000,
        color: [ "rgba(191,191,197,0.4)","#F0E95F","#33708F","#000000"]
    },
    {
        id: 15,
        series: IP_12_SERIES,
        name: "IPhone 12",
        images: [
            { id: 15 - 1, url: "../../assets/img/IP-12/anh1-2.png" },
            { id: 15 - 2, url: "../../assets/img/IP-12/anh2-2.png" },
            { id: 15 - 3, url: "../../assets/img/IP-12/anh3-2.png" },
            { id: 15 - 4, url: "../../assets/img/IP-12/anh4-2.png" }
        ],
        description: "This is IPhone 12.",
        price: 25000000,
        color: [ "#A587F4","rgba(131,232,143,0.81)","#33708F","#000000",]
    },
    {
        id: 16,
        series: IP_12_SERIES,
        name: "IPhone 12 Mini",
        images: [
            { id: 16 - 1, url: "../../assets/img/IP-12/anh4-2.png" },
            { id: 16 - 2, url: "../../assets/img/IP-12/anh3-2.png" },
            { id: 16 - 3, url: "../../assets/img/IP-12/anh2-2.png" },
            { id: 16 - 4, url: "../../assets/img/IP-12/anh1-2.png" }
        ],
        description: "This is IPhone 12 Mini.",
        price: 22000000,
        color: [ "#A587F4","rgba(131,232,143,0.81)","#33708F","#000000",]
    },

    // ** IPHONE 11 SERIES
    {
        id: 17,
        series: IP_11_SERIES,
        name: "IPhone 11 Pro Max",
        images: [
            { id: 17 - 1, url: "../../assets/img/IP-11/anh1.png" },
            { id: 17 - 2, url: "../../assets/img/IP-11/anh2.png" },
            { id: 17 - 3, url: "../../assets/img/IP-11/anh3.png" },
            { id: 17 - 4, url: "../../assets/img/IP-11/anh4.png" }
        ],
        description: "This is IPhone 11 Pro Max.",
        price: 36000000,
        color: [ "rgba(95,147,100,0.81)","#000000","rgba(191,191,197,0.4)","#F0E95F"]
    },
    {
        id: 18,
        series: IP_11_SERIES,
        name: "IPhone 11 Pro",
        images: [
            { id: 18 - 1, url: "../../assets/img/IP-11/anh4.png" },
            { id: 18 - 2, url: "../../assets/img/IP-11/anh3.png" },
            { id: 18 - 3, url: "../../assets/img/IP-11/anh2.png" },
            { id: 18 - 4, url: "../../assets/img/IP-11/anh1.png" }
        ],
        description: "This is IPhone 11 Pro.",
        price: 28000000,
        color: [ "rgba(95,147,100,0.81)","#000000","rgba(191,191,197,0.4)","#F0E95F"]
    },
    {
        id: 19,
        series: IP_11_SERIES,
        name: "IPhone 11",
        images: [
            { id: 19 - 1, url: "../../assets/img/IP-11/anh1-2.png" },
            { id: 19 - 2, url: "../../assets/img/IP-11/anh2-2.png" },
            { id: 19 - 3, url: "../../assets/img/IP-11/anh3-2.png" },
            { id: 19 - 4, url: "../../assets/img/IP-11/anh4-2.png" }
        ],
        description: "This is IPhone 11.",
        price: 25000000,
        color: [ "rgba(236,19,3,0.81)","rgba(131,232,143,0.81)","#F0E95F","#000000"]
    },
]

const bestSellingProducts = [];

const cart = [];

const users = [];

// ** Storage keys definition
const CART_KEY = 'cart';
const TRENDING_PRODUCTS_KEY = 'trendingProducts';
const BEST_SELLING_PRODUCTS_KEY = 'bestSellingProducts';

const storage = localStorage;

// ** Convert trendingProducts array to string to save to localStorage
const stringTrendingProducts = JSON.stringify(trendingProducts);
storage.setItem(TRENDING_PRODUCTS_KEY, stringTrendingProducts);

// ** Convert cart array to string to save to localStorage
// const stringCart = JSON.stringify(cart);
// storage.setItem(CART_KEY, stringCart);
