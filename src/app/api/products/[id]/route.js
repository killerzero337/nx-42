import getUsers from "@/lib/users";
import getProducts from "@/lib/products";

export function GET(request, { params }) {
    let products = getUsers();
    let producto = products.find(product => product.id == params.id)

    return Response.json(producto)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let products = getProducts();
    // Obtenemos posición    
    const pos = products.findIndex(product => product.id == product.id)

    // Modificamos usuario
    const newProduct = await request.json()
    products.splice(pos, 1, { id: Number(params.id), ...newProduct })

    return Response.json(products)
}


export function DELETE(request, { params }) {
    let products = getProducts();
    // Obtenemos posición    
    const pos = products.findIndex(product => product.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        products.splice(pos, 1)

    return Response.json(products)
}