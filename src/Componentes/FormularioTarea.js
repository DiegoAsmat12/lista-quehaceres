import React from "react";

const FormularioTarea = (props) => {
    const {setListaTareas} = props;
    const {tarea,setTarea} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(tarea.detalle.trim()==="") return;
        setListaTareas((prev) => [
            ...prev,
            tarea
        ]);
        setTarea({
            detalle:"",
            completada:false
        })
    }
    const setTareaDescription = (e) =>{
        setTarea({
            ...tarea,
            detalle: e.target.value
        })
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" value={tarea.detalle} onChange={(e) => setTareaDescription(e)}></input>
            <button type="submit">Agregar</button>
        </form>
    )
}


export default FormularioTarea;
