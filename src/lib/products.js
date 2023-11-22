let seed = [
    { id: 1, nombre: "Pan", precio: 1.00 },
    { id: 2, nombre: "Agua", precio: 1.20 },
    { id: 3, nombre: "Leche", precio: 1.50 },
    { id: 4, nombre: "Pan", precio: 1.00 },
    { id: 5, nombre: "Agua", precio: 1.20 },
    { id: 6, nombre: "Leche", precio: 1.50 }
]

let products = null;

export default function getProducts() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!products)
        products = seed;

    return products;
}

