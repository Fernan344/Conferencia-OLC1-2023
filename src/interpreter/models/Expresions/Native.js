import { Instruccion } from '../Abstract/Instruction';
import { DataType } from '../Symbol/Type';

export default class Nativo extends Instruccion {
  valor;

  constructor(tipo, valor, fila, columna) {
    super(tipo, fila, columna);
    this.valor = valor;
  }

  interpretar(arbol, tabla) {    
    if(this.tipo.getTipo() === DataType.ENTERO){
        return this.valor;
    }else if(this.tipo.getTipo() === DataType.CADENA){
        return this.valor.toString();
    }
  }
}