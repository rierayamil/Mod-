document.addEventListener('DOMContentLoaded', traerProducto)


async function traerProducto() {
    const url = 'https://fakestoreapi.com/products'

    try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json
        console.log(respuesta)
    } catch (error) {


    }

}