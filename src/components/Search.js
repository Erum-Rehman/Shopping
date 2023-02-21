import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample() {
    return (
        <>
            <div style={{ width: "43%", margin: "auto", padding: '2% 0' }}>
                <InputGroup classNameName="mt-3 mb-3 ">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>

                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid ">
                       
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link  disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-3 disabled">Link</a>
                                <a className="nav-link px-5 disabled">Link</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default ButtonsExample;