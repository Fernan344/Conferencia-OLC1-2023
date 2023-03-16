export default class Three {
    instrucciones;
    consola;
    traduction;
    
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.traduction = '';
        this.consola = '';
    }
    getconsola() {
        return this.consola;
    }
    setconsola(value) {
        this.consola = value;
    }
    actualizaConsola(uptodate) {
        this.consola = `${this.consola}${uptodate}\n`;
    }
    getTraduction() {
        return this.traduction
    }
    setTraduction(traduction) {
        this.traduction = traduction;
    }
    addTraduction(uptodate) {
        this.traduction = `${this.traduction}\n${uptodate}\n`;
    }    
    getinstrucciones() {
        return this.instrucciones;
    }
    setinstrucciones(value) {
        this.instrucciones = value;
    }
    getErrores() {
        return this.errores;
    }
    seterrores(value) {
        this.errores = value;
    }
    gettablaGlobal() {
        return this.tablaGlobal;
    }
    settablaGlobal(value) {
        this.tablaGlobal = value;
    }
}