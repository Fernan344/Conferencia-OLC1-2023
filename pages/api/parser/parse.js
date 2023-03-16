import parser from '../../../src/interpreter/gramar'
import SymbolTable from '../../../src/interpreter/models/Symbol/SymbolTable';
import { StatusCodes } from "http-status-codes";
import errorMidleware from '../../../src/utils/http/http-error-handler'
import Errores from '../../../src/interpreter/models/Exception/Error'
import { Instruccion } from '../../../src/interpreter/models/Abstract/Instruction';
import { HttpMiddleware } from '../../../src/utils/http/http-middleware';

async function POST (req, res) {
    const { code } = req.body; 
    const production = parser.parse(code);   
    const ast = production.getResult();
    const table = new SymbolTable();
    ast.settablaGlobal(table);
    for (let i of ast.getinstrucciones()) {    
      const result = i instanceof Instruccion ? i.interpretar(ast, table) : new Errores("ERROR SEMANTICO", "no se puede ejecutar la instruccion", 0, 0);
      if (result instanceof Errores) {
        result.interpretar(ast, table);
      }
    }    
    res.status(StatusCodes.OK).json({console: ast.getconsola()})
  
}

export default async function api (req, res)  {
  try {
    return HttpMiddleware({POST}, req, res)
  }catch (err){
    errorMidleware(err, req, res)
  }
}