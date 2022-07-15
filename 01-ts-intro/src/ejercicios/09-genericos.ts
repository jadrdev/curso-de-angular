/*
    ===== Código de TypeScript =====
*/

function queTipoSuy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSuy('Mamá')
let soyNumero = queTipoSuy(100)
let soyArray = queTipoSuy([1, 2, 3, 4])

let soyExplicito = queTipoSuy<number>(100)