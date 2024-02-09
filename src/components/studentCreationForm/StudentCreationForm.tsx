import { Card, CardHeader, CardTitle, CardBody, Form, Button } from "react-bootstrap";

function StudentCreationForm(){

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add student</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            ID
                        </Form.Label>
                        <Form.Control type = "number"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Full Name
                        </Form.Label>
                        <Form.Control type = "text"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            E-mail
                        </Form.Label>
                        <Form.Control type = "email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Course
                        </Form.Label>
                        <Form.Control type = "text"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Form>
            </CardBody>
        </Card>
    )

}

export default StudentCreationForm;