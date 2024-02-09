import Alert from "react-bootstrap/esm/Alert";

function Warning({message, variant}:{message:string, variant: string}){

    return (
        <Alert className="mt-5" variant={variant}>
            {message}        
        </Alert>
    )

}
export default Warning;