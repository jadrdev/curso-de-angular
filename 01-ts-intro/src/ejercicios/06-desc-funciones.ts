/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number
}

const telefono: Producto = {
    desc: 'iPhone 12',
    precio: 1000
}

const tablet: Producto = {
    desc: 'iPad 9',
    precio: 950
}


export function calculaISV(productos: Producto[]): [number, number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.15]
}

const articulos = [telefono, tablet]

const [total, isv] = calculaISV(articulos)

console.log('Total', total)
console.log('ISV:', isv)