import { Alert } from "react-bootstrap";

type AlertGeneratorProps = {
    message: string;
}

const AlertGenerator = ({message}: AlertGeneratorProps)=>{
    return(
        <Alert variant="success" className="mt-2 w-25">
            <p>{message}</p>
        </Alert>
    )
}

export default AlertGenerator;