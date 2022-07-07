(function () {

    function activar(
        quien: string,
        objecto: string = 'batiseñal',
        momento?: string
    ) { 

        if (momento) {
            console.log(`${quien} activó la ${objecto} en la ${momento}.`)
        } else {
            console.log(`${quien} activó la ${objecto}`)

        }

        
    }
    
    activar('Gordon', 'batiseñal');

})();

