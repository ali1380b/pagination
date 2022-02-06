const products = [
    {
        id: 1,
        name: 'mouse',
        price: 200000,
        quantity: 258
    },
    {
        id: 2,
        name: 'keyboard',
        price: 300032,
        quantity: 7898
    },
    {
        id: 3,
        name: 'cpu',
        price: 23442434,
        quantity: 454
    },
    {
        id: 4,
        name: 'ram',
        price: 5600000,
        quantity: 45
    },
    {
        id: 5,
        name: 'card graphic',
        price: 100000000,
        quantity: 45
    },
]

export function getProduct(start, end) {
    return products.slice(start, end);
}

export function getProductCount() {
    return products.length
}