import {Button} from "react-bootstrap";

function EyeTrackingController() {
    function remove() {
        let iframe = document.getElementById("myFrame");
        console.log(iframe.contentWindow.blahblah());
    }

    return (
        <div>
            <iframe id="myFrame" src="./webGazerDetection.html" height="500
            " width="1000" title="Iframe Example"/>
            <Button onClick={remove}>Remove</Button>
        </div>
    );
}

export default EyeTrackingController;