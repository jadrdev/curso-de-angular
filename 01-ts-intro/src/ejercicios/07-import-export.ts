/*
    ===== Código de TypeScript =====
*/

import { Producto, calculaISV } from "./06-desc-funciones";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 20000
    },
    {
        desc: 'Telefono 2',
        precio: 40000
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total)
console.log('ISV', isv)