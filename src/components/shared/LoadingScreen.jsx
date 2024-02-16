import { Spinner } from 'react-bootstrap'

const LoadingScreen = () => (
    <div className="container-sm">
        <Spinner role = "status" animation="grow" variant="warning"></Spinner>
    </div>
)

export default LoadingScreen