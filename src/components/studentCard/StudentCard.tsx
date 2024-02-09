import { Table } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { Student } from "../../models/student";

function StudentCard ({student}:{student: Student}){
    return (
<Card className="my-3">
      <Card.Body>
        <Card.Title>Student Information</Card.Title>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Student ID</td>
              <td>{student.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{student.full_name}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{student.e_mail}</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>{student.course}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    )


}

export default StudentCard;