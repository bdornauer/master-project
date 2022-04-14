import {Image} from "react-bootstrap";
import Colors from '../Colors'

function Icon(props) {

    function getColor(isActive) {
        return isActive ? Colors.blue: Colors.brightBlue;
    }

    return (
        <Image src={props.icon} width={props.width} height={props.height}
               style={{
                   padding: props.width/10,
                   width: props.width,
                   height: props.height,
                   borderRadius: props.height / 2,
                   background: getColor(props.isActive),
               }}></Image>
    );
}

export default Icon;