(function () {

    const miFuncion = (a: string) => {
        return a.toUpperCase()
    }

    const miFuncionF = (a: string) => a.toUpperCase()


    const sumanN = function (a: number, b: number) {
        return a + b
    }

    const SumarF = (a: number, b: number) => a + b

    const hulk = {
        nombre: 'Hulk',
        smash() {

            setTimeout(() => {
            console.log(`${this.nombre} smash!!!`)
            }, 1000)
            
        }
    }

    hulk.smash()

    })();