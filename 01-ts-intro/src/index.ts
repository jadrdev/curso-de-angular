/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Joshua",
};

const pasajero2: Pasajero = {
  nombre: "Yasmina",
  hijos: ["Iriome", "Iraya"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantoshijjos = pasajero.hijos?.length || 0;

  console.log(cuantoshijjos);
}

imprimeHijos(pasajero1);
