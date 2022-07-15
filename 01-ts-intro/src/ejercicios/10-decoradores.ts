/*
    ===== Código de TypeScript =====
*/


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}
 
@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

@reportableClassDecorator
class MiSuperClase {
    public mipropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo')
    }
}

console.log(MiSuperClase)

const miclase = new MiSuperClase();

console.log(miclase.mipropiedad)