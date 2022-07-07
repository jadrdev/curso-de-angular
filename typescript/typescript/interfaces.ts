(() => {

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }
    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la misión`)
    
    }

    const regresarAlCuartel = (xmen: Xmen) => {
        console.log(`${xmen.nombre} ha regresado a a base`)
    
    }
    
    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 70
    }

    enviarMision(wolverine)
    regresarAlCuartel(wolverine)
    })();