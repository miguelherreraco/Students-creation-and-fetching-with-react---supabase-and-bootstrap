import { useState } from "react"
import ModalApp from "./components/modal/Modal"
import SearchInput from "./components/searchInput/SearchInput"
import StudentCard from "./components/studentCard/StudentCard"
import StudentCreationForm from "./components/studentCreationForm/StudentCreationForm"
import Warning from "./components/warning/Warning"
import { Button } from "react-bootstrap"
import useSupabase from "./hooks/useSupabase"

function App() {
  const [modalShow, setModalShow] = useState(false);
  
  const {getStudent, isFetching, student, error, setStudent, message} = useSupabase();

  if(isFetching) {
    return (
      <main className="container mt-5 col-md-6 " >
        <p>Loading...</p>

      </main>
      )
  }

  return (
    <main className="container mt-5 col-md-6 " >
    
    <SearchInput functionToExecute={getStudent} setStudent={setStudent} />
    {(error && error.length > 0) && <Warning message={error} variant="warning"/>}
    {(message && message.length > 0 ) && <Warning message={message} variant="success"/>}
    {student?.id &&
    <StudentCard
      student= {student}/>}
    <Button className="w-100 mt-3" variant="primary" onClick={ () => {
       setModalShow(true)
      }}>Add student</Button>
    <ModalApp show= {modalShow} setShow={setModalShow}>
      <StudentCreationForm setModalShow={setModalShow}/>
    </ModalApp>
    </main>
  )
}

export default App
