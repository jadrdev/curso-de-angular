/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b)
}

const sumarFecha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(numero: number, otronumero?: number, base: number = 2): number {
    return numero * base
}

// const resultado = sumar(5, 4)

// const resultadoMulti = multiplicar(5, 4)


// console.log('Sumar', resultado);

// console.log('Multiplicar', resultadoMulti);

interface PersonajeLOR{
    nombre: string,
    pv: number,
    mostrarHp: () => void,

}


function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Legolas',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de Vida', this.pv)
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarHp()

