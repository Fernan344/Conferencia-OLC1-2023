import { Instruccion } from '../Abstract/Instruction';
import Tipo, {DataType} from '../Symbol/Type';

export default class Aritmetico extends Instruccion {
  operacionIzq;
  operacionDer;
  tipo;
  

  constructor(tipo, opIzq, opDer, fila, columna) {
    super(new Tipo(DataType.INDEFINIDO), fila, columna);
    this.tipo = tipo;
    this.operacionIzq = opIzq;
    this.operacionDer = opDer;
  }

  interpretar(arbol, tabla) {
        if(this.tipo===tipoOp.SUMA){
            let valueIzq = this.operacionIzq.interpretar(arbol, tabla);
            let valueDer = this.operacionDer.interpretar(arbol, tabla);
            return Number(valueIzq) + Number(valueDer);
        } else if(this.tipo===tipoOp.RESTA){    
            let valueIzq = this.operacionIzq.interpretar(arbol, tabla);
            let valueDer = this.operacionDer.interpretar(arbol, tabla);
            return Number(valueIzq) - Number(valueDer);
        } 
        return null;
  }
}

export const  tipoOp = {
    SUMA: 0,
    RESTA: 1,
    DIVISION: 2,
    MULTIPLICACION: 3
}