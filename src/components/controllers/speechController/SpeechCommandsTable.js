import {Table} from "react-bootstrap";
import colors from "../../Colors";


//Letters: https://emojipedia.org/regional-indicator-symbol-letter-o/
function SpeechCommandsTable() {
    return (
        <Table striped hover size="sm" style={{fontSize: "22px"}}>
            <thead style={{backgroundColor: colors.brightBlue}}>
            <tr>
                <th>Sprachbefehl</th>
                <th>Beschreibung</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>zoom <em>[factor]</em></td>
                <td>Zoom <em>[factor]</em></td>
            </tr>
            <tr>
                <td>horizontal <em>[steps per 10px]</em></td>
                <td>Horizontale Navigation</td>
            </tr>
            <tr>
                <td>vertical <em>[steps per 10px]</em></td>
                <td>Vertikale Navigation</td>
            </tr>
            <tr>
                <td>brightness <em>[percent]</em></td>
                <td>Helligkeitslevel-Level</td>
            </tr>
            <tr>
                <td>contrast <em>[percent]</em></td>
                <td>Sättigungs-Level </td>
            </tr>
            <tr>
                <td>invert</td>
                <td>invertieren der Farben</td>
            </tr>
            <tr>
                <td>cancel</td>
                <td>Rückgängig machen</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default SpeechCommandsTable;