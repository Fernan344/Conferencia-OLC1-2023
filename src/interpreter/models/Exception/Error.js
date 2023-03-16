import { Instruccion } from "../Abstract/Instruction";
import Type, { DataType } from '../Symbol/Type';
export default class Error extends Instruccion {
    tipoError;
    desc;

    getDesc() {
      return this.desc;
    }
    getTipoError() {
      return this.tipoError;
    }
    getcolumna() {
      return this.columna;
    }
    getFila() {
      return this.linea;
    }
    constructor(tipo, desc, linea, columna) {
      super(new Type(DataType.INDEFINIDO), linea, columna);
      this.tipoError = tipo;
      this.desc = desc;
    }
    interpretar(ast, tabla) {
      ast.actualizaConsola(
        'Se obtuvo: ' +
        this.tipoError +
        ' desc:{' +
        this.desc +
        '} en la fila: ' +
        this.linea +
        ' en la columna: ' +
        this.columna +
        '\n'
      );
    }
  }