import { useState } from "react"
import ModalApp from "./components/modal/Modal"
import SearchInput from "./components/searchInput/SearchInput"
import StudentCard from "./components/studentCard/StudentCard"
import StudentCreationForm from "./components/studentCreationForm/StudentCreationForm"
import Warning from "./components/warning/Warning"
import { Button } from "react-bootstrap"

function App() {
  const [modalShow, setModalShow] = useState(false);
  // const handlerViewStudentCard = () => {

  // }

  return (
    <main className="container mt-5 col-md-6 " >
    
    <SearchInput />
    <Warning message= "There's no students to show"/>
    <StudentCard/>
    <Button className="w-100 mt-3" variant="primary" onClick={()=> setModalShow(true)}>Add student</Button>
    <ModalApp show= {modalShow} setShow={setModalShow}>
      <StudentCreationForm/>
    </ModalApp>
    </main>
  )
}

export default App
