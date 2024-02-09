import { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, Form, Button } from "react-bootstrap";
import useSupabase from "../../hooks/useSupabase";

function StudentCreationForm({setModalShow}:{setModalShow: React.Dispatch<React.SetStateAction<boolean>>}){
    
    const [inputFullName, setInputFullName] = useState<string>();    
    const [inputEmail, setInputEmail] = useState<string>();
    const [inputCourse, setInputCourse] = useState<string>();
    const { createStudent } = useSupabase();

    
    const onSubmitHandler =(event: React.FormEvent<HTMLFormElement>) =>{ //executes the creation of the student with the required data
        event.preventDefault();
        if( inputFullName && inputEmail && inputCourse){
            createStudent( inputFullName, inputEmail, inputCourse )
                .then(
                    ()=> {setModalShow(false)}
                )
        }else{
            alert("please fulfill all fields") //shows an alert in case the user is missing any field
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add student</CardTitle>
            </CardHeader>
            <CardBody>
                <form onSubmit={(event)=> onSubmitHandler(event)}>
                    <Form.Group>
                        <Form.Label>
                            Full Name
                        </Form.Label>
                        <Form.Control type = "text" onChange={(e) => setInputFullName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            E-mail
                        </Form.Label>
                        <Form.Control type = "email" onChange={(e) => setInputEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Course
                        </Form.Label>
                        <Form.Control type = "text" onChange={(e) => setInputCourse(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="w-100 mt-3">Create</Button>
                </form>
            </CardBody>
        </Card>
    )

}

export default StudentCreationForm;