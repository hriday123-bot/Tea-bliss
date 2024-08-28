import { Spinner } from "react-bootstrap";

const Loader=()=>{
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner animation="border">
            </Spinner>
        </div>
    )
}

export default Loader;