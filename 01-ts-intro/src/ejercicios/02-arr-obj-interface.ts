/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['JavaScript', 'TypeScript', 'Angular']

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Joshua',
    hp: 100,
    habilidades: ['JavaScript', 'TypeScript', 'Angular'],
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje)