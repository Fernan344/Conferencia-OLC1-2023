import { Instruccion } from '../Abstract/Instruction';
import Errores from '../Exception/Error';
import Type, { DataType } from '../Symbol/Type';

export default class Imprimir extends Instruccion {
  
    expresion;

    constructor(expresion, linea, columna) {
        super(new Type(DataType.INDEFINIDO), linea, columna);
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let valor = this.expresion.interpretar(arbol, tabla);
        if (valor instanceof Errores) return valor;
        arbol.actualizaConsola(valor + '');
    }
}