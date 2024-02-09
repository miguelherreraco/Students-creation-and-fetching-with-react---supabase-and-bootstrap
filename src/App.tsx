import { useState } from "react"
import ModalApp from "./components/modal/Modal"
import SearchInput from "./components/searchInput/SearchInput"
import StudentCard from "./components/studentCard/StudentCard"
import StudentCreationForm from "./components/studentCreationForm/StudentCreationForm"
import Warning from "./components/warning/Warning"
import { Button } from "react-bootstrap"

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <main className="container">
    
    <SearchInput/>
    <Warning message= "There's no students to show"/>
    <StudentCard/>
    <Button variant="primary" onClick={()=> setModalShow(true)}>Add student</Button>
    <ModalApp show= {modalShow} setShow={setModalShow}>
      <StudentCreationForm/>
    </ModalApp>
    </main>
  )
}

export default App
