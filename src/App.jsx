import "bootstrap/dist/css/bootstrap.min.css"
import Titulo from "./components/Titulo"
import Formulario from "./components/Formulario"

function App() {

  return (
    <>
    <div className="container-fluid bg-info text-white pt-3"><Titulo></Titulo></div>
      <Formulario></Formulario>
    </>
  )
}

export default App
