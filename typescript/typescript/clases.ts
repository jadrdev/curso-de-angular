(() => {

    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal?: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre: string, equipo: string, nombreReal: string) {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;

            
    //     }

    // }
    
     class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal?: string; 

        // puedePelear: boolean;
        // peleasGanadas: number;

         constructor(public nombre: string,
         public equipo: string,
         public nombreReal: string = 'Scoot',
         public PuedePelear: boolean = true,
         public peleasganadas: number = 0) {}
    }

    const antman: Avenger = new Avenger('Antman', 'Capi');
    console.log(antman)

})();