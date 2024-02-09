import Alert from "react-bootstrap/esm/Alert";

function Warning({message}:{message:string}){

    return (
        <Alert className="mt-5">
            {message}        
        </Alert>
    )

}
export default Warning;