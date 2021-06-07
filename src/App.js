//Context
import Context from './context/context'
//Libreria de estilos
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
//Components
import Table from './component/Table/Table'


function App() {
  return (
    <Context>
      <Table/>
    </Context>
  );
}

export default App;
