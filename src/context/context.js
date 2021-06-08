import { createContext, useState, useEffect } from "react";
//Fuente de dato local
import Data from '../data/data'




//Se crea el context
export const Context = createContext();


//Componente que devuelve el provider
const DataContext = ({ children }) => {

  //Data a usar en la tabla
  const [data, setData] = useState(Data)

  /*Fuente de datos api NO USAR falta crearla...
  const getData = async () => {
    try {
      let res = await fetch('https://api-test-1.juancarlosca374.repl.co/api-25');
      let datos = await res.json();
      //console.log(datos)
      setData(datos)
    }
    catch(err){
      console.log(err)
    }
  }
  //Despues de montarse el componente
  useEffect(() => {
    getData()
  },[])*/

  
  
  return (
    <Context.Provider value={{ data, setData }}>
        {children}
    </Context.Provider>
  );
};

export default DataContext;
