export class Instruccion {
    linea;
    columna;
    tipo;
  
    constructor(tipo, linea, columna) {
      this.linea = linea;
      this.columna = columna;
      this.tipo = tipo;
    }
  
    interpretar(...any){
        throw new Error("Method 'interpretar()' must be implemented. Params: "+any.concat(', '));
    };

    build(...any){
        throw new Error("Method 'build()' must be implemented. Params: "+any.concat(', '));
    }
}