/*
    ===== Código de TypeScript =====
*/


/* Creating an interface called iPad and then creating an object called reproductor that has the same
properties as the interface. */
interface iPad{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles,
}

interface Detalles{
    autor: string,
    anio: number,
}

const reproductor: iPad = {
    volumen: 80,
    segundo: 10,
    cancion: 'Liberate',
    detalles: {
        autor: 'Slipknot',
        anio: 2016,
    }

}


const { volumen, segundo, cancion, detalles } = reproductor
const { autor, anio } = detalles

console.log('El volumen actual es:', volumen)
console.log('El segundo actual es:', segundo )
console.log('El canción actual es:', cancion)
console.log('El autor es: ', autor)
console.log('La escribio en:', anio)

const dbz: string[] = ['Goku', 'Vegteta', 'Freeza']

const [, , p2] = dbz

console.log('Personajes de DBZ: ', )
console.log('Personajes de DBZ: ', )
console.log('Personajes de DBZ: ', p2)








