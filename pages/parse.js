import { useState } from "react";
import { parseCode } from "../services/parse.service";

function ParsePage(props) {   
    const [code, setCode] = useState('');
    const [consola, setConsola] = useState('');

    const onClickHandle = () => {
      parseCode(code)
      .then(data => {
          setConsola(data.console)
      })
    }

    const onChangeCodeHandle = (event) => {
      setCode(event.target.value);
    }
    
    return (
      <>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Input</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" onChange={onChangeCodeHandle}></textarea>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onClickHandle}>Parse</button>
        <div className="form-group">
            <label htmlFor="consola_salida">Output</label>
            <textarea className="form-control" id="consola_salida" rows="9" disabled value={consola}></textarea>
        </div>
      </>
    )
}

export default ParsePage;