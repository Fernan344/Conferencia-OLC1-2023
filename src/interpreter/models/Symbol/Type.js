export default class Type {
    tipo;
  
    constructor(tipo) {
      this.tipo = tipo;
    }
    getTipo() {
      return this.tipo;
    }
    setTipo(tipo) {
      this.tipo = tipo;
    }
}
  
export const DataType = {
    ENTERO: 0,
    CADENA: 1,
    BOOLEAN: 2,
    DECIMAL: 3,
    VOID: 4,
    IDENTIFICADOR: 5,
    INDEFINIDO: 6
}