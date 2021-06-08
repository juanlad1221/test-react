import { useContext} from "react";
//Se importa el contexto
import { Context } from '../../context/context'
//Librerias
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import 'primeflex/primeflex.css';
//Componentes
import Bar from '../Bar/Bar'




const Table = () => {
  //Se trae la data del context
  const { data, setData } = useContext(Context)
 

  //Objeto que referencia la data con su setData
  const dataTableFuncMap = {
    'data': setData,
  }
  //Obj. utilizado p/almacenar la row a editar.
  let originalRows = {};

  //Funciones que manejan la edicion en cada row
  const pacienteEditor = (productKey, props) => {
    return inputTextEditor(productKey, props, 'paciente');
  }
  const odontologoEditor = (productKey, props) => {
    return inputTextEditor(productKey, props, 'odontologo');
  }
  const placasEditor = (productKey, props) => {
    console.log(props)
    return inputTextEditor(productKey, props, 'placas');
  }
  const inicioEditor = (productKey, props) => {
    return inputTextEditor(productKey, props, 'inicio');
  }
  const finEditor = (productKey, props) => {
    return inputTextEditor(productKey, props, 'fin');
  }


  //Funcion que devuelve un input para hacer la edición en cada elemento de la Tbl.
  const inputTextEditor = (productKey, props, field) => {
    return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(productKey, props, e.target.value)} />;
  }
  //Funcion que realiza la edicion misma
  const onEditorValueChange = (productKey, props, value) => {
    let updatedProducts = [...props.value];
    updatedProducts[props.rowIndex][props.field] = value;
    dataTableFuncMap[`${productKey}`](updatedProducts);
  }
  const onRowEditInit = (event) => {
    originalRows[event.index] = { ...data[event.index] };
  }
const onRowEditCancel = (event) => {
    let products = [...data];
    products[event.index] = originalRows[event.index];
    delete originalRows[event.index];

    setData(products);
  }
  const last20 = (array) => {
    if (array.length > 20) {
      let index = array.length - 20
      return array.slice(index, array.length)
    }
    if (array.length < 20) {
      return false
    }
    if(array.length === 20){
      return true
    }
  }


  return (
    <>
      <Bar/>

      <br/><br/><br/><br/><br/><br/>

      <div className="p-d-flex p-jc-center" >

        {last20(data) ?
          <div className="p-mr-2  p-sm-12 p-md-6 p-lg-3" style={ancho}>

              <DataTable value={data} editMode="row" dataKey="id" onRowEditInit={onRowEditInit} onRowEditCancel={onRowEditCancel}>
                <Column field='id' header='ID' />
                <Column field='paciente' header='PACIENTE' editor={(props) => pacienteEditor('data', props)} />
                <Column field='odontologo' header='ODONTOLOGO' editor={(props) => odontologoEditor('data', props)} />
                <Column field='placas' header='PLACAS' editor={(props) => placasEditor('data', props)} style={centro}/>
                <Column field='inicio' header='INICIO' editor={(props) => inicioEditor('data', props)} style={centro}/>
                <Column field='fin' header='FIN' editor={(props) => finEditor('data', props)} style={centro}/>
                <Column header='ACCIÓN' rowEditor headerStyle={{ width: '7rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
              </DataTable>
            
          </div>
          : (<div className="p-d-flex p-jc-center">
            <Message severity="warn" text="Datos Insuficientes..." />
          </div>)
        }

      </div>
    </>
  )
};


//Algunos estilos
const centro = {
  textAlign: 'center'
}
const ancho = {
  width: '70%'
}



export default Table;
