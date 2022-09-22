const Input = ({estado, setEstado}) => {

    return (
        <div className="clasesParaLosInputs">
            <label htmlFor="">
                Nombre:
            </label>
            <input 
            className="form-control"
            type="text"
            placeholder="Ingresa un texto" />

             <label htmlFor="">
                Contraseña:
             </label>
            <input
            className="form-control"
            type="password" 
            placeholder="Ingresa una contraseña"
            onChange={(e) => setEstado(e.target.value)}
            value={estado} />
        </div>
    )
}

export default Input;