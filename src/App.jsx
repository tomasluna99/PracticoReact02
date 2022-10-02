import FormularioTarea from "./Components/FormularioTarea";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


function App() {
  return (
    
    <>
    <Container className="my-5">
    <h1 className="display-4">Lista de tareas</h1>
    <hr />
    
    
    
   <FormularioTarea></FormularioTarea>
    </Container>
    </>
  
  
  );
}

export default App;
