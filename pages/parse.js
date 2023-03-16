import { useState, useEffect } from "react";
import { parseCode } from "../services/parse.service";

function ParsePage(props) {   
    const initialValue = `imprimir("hola");\nimprimir("mundo");\nimprimir("adios");\nimprimir(5+5+5+5+5+5);`
    const [code, setCode] = useState(``);
    const [consola, setConsola] = useState('');
    const [graph, setGraph] = useState('');
    const [mode, setMode] = useState('console');

    useEffect(() => {
      document.getElementById('input_console').value = initialValue;
    }, [])

    const onClickHandle = () => {
      parseCode(code)
      .then(data => {
          setConsola(data.console);
          setGraph(data.ast);
      })
    }

    const onClickHandleMode =() => {
      mode === 'console' ? setMode('graph') : setMode('console')
    }

    const onChangeCodeHandle = (event) => {
      setCode(event.target.value);
    }
    
    return (
      <>
        <div className="form-group">
            <label htmlFor="input_console">Input</label>
            <textarea className="form-control" id="input_console" rows="9" onChange={onChangeCodeHandle}></textarea>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onClickHandle}>Parse</button>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onClickHandleMode}>{mode}</button>
        <div className="form-group">
            <label htmlFor="consola_salida">Output</label>
            <textarea className="form-control" id="consola_salida" rows="9" disabled value={mode === 'console' ? consola : graph}></textarea>
        </div>
      </>
    )
}

export default ParsePage;