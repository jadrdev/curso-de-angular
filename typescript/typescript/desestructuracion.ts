(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'SuperFuerza'
    }

    const extraer = ({ nombre, poder }: any) => {
        // const { nombre, poder } = avenger
        console.log(nombre)
        console.log(poder)
    }

    // extraer(avenger)

    const avengers: string[] = ['Thor', 'Ironam', 'Spiderman']

    const [, , arana] = avengers
    
    // console.log(loki)
    // console.log(hombre)
    // console.log(arana)

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {

        console.log(thor)
        console.log(ironman)
        console.log(spiderman)
        
    }

    extraerArr(avengers)


    

    

    })();