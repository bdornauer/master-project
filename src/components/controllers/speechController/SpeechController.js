import React, {Fragment, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import CommandBar from "../../commandBar/CommandBar";
import {Button, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import DicomViewer from "../../dicomViewer/DicomViewer";
import KeyboardTable from "../keyboardController/KeyboardTable";
import {BsFillMicFill, BsFillMicMuteFill} from "react-icons/all";
import colors from "../../Colors";
import SpeechCommandsTable from "./SpeechCommandsTable";

function SpeechController() {
    const [selectedCommand, setSelectedCommand] = useState("-1");

    const commands = [
        {
            command: "top",
            callback: () => setSelectedCommand("up")
        },
        {
            command: "down",
            callback: () => {
                setSelectedCommand("down")
            }
        },
        {
            command: "left",
            callback: () => setSelectedCommand("left")
        },
        {
            command: "right",
            callback: () => setSelectedCommand("right")
        }
    ];

    for (let i = -10; i < 10; i++) {
        commands.push({command: i.toString(), callback: () => setSelectedCommand(i.toString())})
    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});

    function startListening() {
        SpeechRecognition.startListening({continuous: true});
        //TODO: change possible settings: https://github.com/JamesBrill/react-speech-recognition/tree/8ecb6052949e47a3fae8c6978abb4253ee1d00f1
    }

    function stopListening() {
        SpeechRecognition.stopListening()
        //TODO: change possible settings: https://github.com/JamesBrill/react-speech-recognition/tree/8ecb6052949e47a3fae8c6978abb4253ee1d00f1
    }

    function getLast5Words(transcript) {
        const arr = transcript.split(' ');
        let n = arr.length;
        let text = "...";

        for (let i = n - 6; i < n; i++) {
            if (arr[i] !== undefined) {
                text += arr[i] + " ";
            }

        }
        return (text)
    }

    return (
        <Fragment>
            <Container style={{maxWidth: '100%', maxHeight: '100%'}}>
                <Row>
                    <CommandBar selectedCommand={selectedCommand} switchMenu={false}/>
                </Row>
                <Row>
                    <Col xs={6}>
                        <h2>Speech-Controller {listening ? <BsFillMicFill/> : <BsFillMicMuteFill/>}</h2>
                        <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
                            <ListGroup componentClass="ul" style={{padding: "3%"}}>
                                <ListGroupItem>
                                    <Button onClick={listening ? stopListening : startListening} style={{
                                        backgroundColor: colors.brightBlue,
                                        borderColor: colors.blue,
                                        color: "black"
                                    }}>
                                        {listening ? 'Ausschalten' : 'Einschalten'}
                                    </Button>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Transcript: {getLast5Words(transcript)}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Command: {selectedCommand}
                                </ListGroupItem>
                            </ListGroup>
                            <SpeechCommandsTable/>
                        </div>
                    </Col>
                    <Col><DicomViewer selectedCommand={selectedCommand}/></Col>
                </Row>
            </Container>
        </Fragment>
    );

}


export default SpeechController;