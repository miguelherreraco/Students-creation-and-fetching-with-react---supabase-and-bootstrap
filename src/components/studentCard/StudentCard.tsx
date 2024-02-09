import { Table } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

function StudentCard (){
    return (
<Card>
      <Card.Body>
        <Card.Title>Student Information</Card.Title>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Student ID</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Juan</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>ada@asda.com</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>5th</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    )


}

export default StudentCard;