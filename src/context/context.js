import { createContext, useState } from "react";
import axios from 'axios'
//Importo la data
import Data from '../data/data'


//Funciones
let du = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })





//Se crea el context
export const Context = createContext();


//Componente que devuelve el provider
const DataContext = ({ children }) => {
  //Data a usar en la tabla
  const [data, setData] = useState(Data)
  console.log(du)


  return (
    <Context.Provider value={{ data, setData }}>
        {children}
    </Context.Provider>
  );
};

export default DataContext;
