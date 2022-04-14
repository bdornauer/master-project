//import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import eyeIcon from "./logo/eyeIcon.svg"
import speechIcon from "./logo/speechIcon.svg"
import keyboardIcon from "./logo/keyboardIcon.svg"
import gestureIcon from "./logo/gestureIcon.svg"
import {Container, Image, Nav, Navbar} from "react-bootstrap"
import Colors from "./Colors"

function Header() {
    return (
        <Navbar style={{backgroundColor: Colors.blue}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src={keyboardIcon}
                        width="50"
                        height="30"
                    />
                    <Image
                        alt=""
                        src={eyeIcon}
                        width="30"
                        height="30"
                    />
                    <Image
                        alt=""
                        src={speechIcon}
                        width="30"
                        height="30"
                    />
                    <Image
                        alt=""
                        src={gestureIcon}
                        width="40"
                        height="30"
                    />
                </Navbar.Brand>
                <Navbar.Brand style={{color: Colors.fontColor}} href="/">Dicom-Controller</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link style={{color: Colors.fontColor}} href="/keyboardController">Keyboard</Nav.Link>
                        <Nav.Link style={{color: Colors.fontColor}} href="/speechController">Speech</Nav.Link>
                        <Nav.Link style={{color: Colors.fontColor}} href="/eyeTrackingController">Eye</Nav.Link>
                        <Nav.Link style={{color: Colors.fontColor}} href="/gestureController">Gesture</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;