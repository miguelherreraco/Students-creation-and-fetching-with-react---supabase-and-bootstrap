import Alert from "react-bootstrap/esm/Alert";

function Warning({message}:{message:string}){

    return (
        <Alert variant="warning">
            {message}        
        </Alert>
    )

}
export default Warning;