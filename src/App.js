import { useEffect, useState } from 'react';
import './App.css';
import FormularioTarea from "./Componentes/FormularioTarea";
function App() {
  const [listaTareas,setListaTareas] = useState(() =>{
    const savedData = localStorage.getItem("tareas");
    const value = JSON.parse(savedData); 
    return value || [];
  });
  const [tarea,setTarea] = useState({
    detalle:"",
    completada:false
  }) 

  const changeCheck = (e,index) =>{
    listaTareas[index].completada = !listaTareas[index].completada;
    setListaTareas( [...listaTareas]);
  }

  const borraTarea = (e,index) =>{
    let listaFiltrada = listaTareas.filter((tarea,indice) => index!=indice);
    setListaTareas([...listaFiltrada]);
  }

  useEffect(() =>{
    localStorage.setItem("tareas", JSON.stringify(listaTareas))
  },[listaTareas])

  return (
    <div className="App">
      <FormularioTarea tarea={tarea} setTarea={setTarea} setListaTareas={setListaTareas}/>
      {
        listaTareas.map((tarea,index) =>
        <div key={index}>
          <span  className={tarea.completada?"checked":""}>{tarea.detalle} 
          <input type="checkbox" checked={tarea.completada} onChange={(e) => changeCheck(e,index)}></input></span>
          <button onClick={(e) => borraTarea(e, index)}>Borrar</button>
        </div> 
        )
      }
    </div>
  );
}

export default App;
