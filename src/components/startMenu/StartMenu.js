//import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import eyeIcon from "../logo/eyeIcon.svg"
import speechIcon from "../logo/speechIcon.svg"
import keyboardIcon from "../logo/keyboardIcon.svg"
import gestureIcon from "../logo/gestureIcon.svg"
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import Colors from "../Colors"


const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    padding: "10vh"
}


function Header() {
    const [hover1, setHover1] = useState(true);
    const [hover2, setHover2] = useState(true);
    const [hover3, setHover3] = useState(true);
    const [hover4, setHover4] = useState(true);

    let cardsHover = [hover1, hover2, hover3, hover4]
    let setCardsHover = [setHover1, setHover2, setHover3, setHover4]

    let controllers = [
        {
            img: keyboardIcon,
            header: "Keyboard-Controller",
            body: "Mit Hilfe von einzelnen Tasten auf der Tastatur kann der DICOM-Viewer gesteuert werden.",
            link: "./keyboardController"
        }, {
            img: eyeIcon,
            header: "Eye-Controller",
            body: "Durch die Erkennung der Pupille kann der Sichtbereich erkannt und darüber der DICOM-Viewer kontrolliert werden.",
            link: "./eyeTrackingController"
        }, {
            img: speechIcon,
            header: "Speech-Controller",
            body: "Mit Hilfe von ausgsprochenen Befehlen können Einstellung beim  DICOM-Viewer druchgeführt werden. ",
            link: "./speechController"
        }, {
            img: gestureIcon,
            header: "Gesten-Erkennung",
            body: "Über die Handposition, sowie die Gesterkennung können die Befehle für den DICOM-Viewer umgesetzt werden.",
            link: "./gestureController"
        }
    ]

    let cardStyle = (hover) => ({
        borderRadius: '6px',
        border: '1px solid',
        backgroundColor: hover ? Colors.blue : Colors.darkblue,
        color: "white",
        padding: '8px 16px',
    })

    const cards = controllers.map((e, index) => (
        <Col>
            <Link to={e.link} style={{textDecoration: 'none', color: "black"}}>
                <Card
                    style={cardStyle(cardsHover[index])}
                    onMouseEnter={() => {
                        setCardsHover[index](false)
                    }} onMouseLeave={() => {
                    setCardsHover[index](true)
                }}>
                    <Card.Img variant="top" src={e.img}/>
                    <Card.Body>
                        <Card.Title>{e.header}</Card.Title>
                        <Card.Text style={{textAlign: "left"}}>
                            {e.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    ));

    return (
        <div style={center}>
            <Row xs={2} md={4} className="g-4">
                {cards}
            </Row>
        </div>
    );
}

export default Header;