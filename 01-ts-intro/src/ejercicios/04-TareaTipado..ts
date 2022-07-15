/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    poder?: string;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
        calle: string,
        pais: string,
        ciudad: string
}


const superHeroe: SuperHeroe = {
    nombre: 'Ironman',
    edad: 45,
    poder: 'SuperArmadura',
    direccion: {
        calle: 'Calle de Tony Stark',
        pais: 'Estados Unidos',
        ciudad: 'New Town'
    },
    mostrarDireccion(): string {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion()
console.log(direccion)