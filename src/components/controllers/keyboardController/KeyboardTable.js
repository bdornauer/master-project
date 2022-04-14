import {Table} from "react-bootstrap";
import colors from "../../Colors";


//Letters: https://emojipedia.org/regional-indicator-symbol-letter-o/
function KeyboardTable() {
    return (
            <Table striped hover size="sm" style={{fontSize: "22px"}}>
                <thead style={{backgroundColor: colors.brightBlue}}>
                <tr>
                    <th>Taste</th>
                    <th>Beschreibung</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span role="img">🇮️️️</span></td>
                    <td>hinein zoomen</td>
                </tr>
                <tr>
                    <td><span role="img">️️🇴</span></td>
                    <td>heraus zoomen</td>
                </tr>
                <tr>
                    <td><span role="img">⬆️</span></td>
                    <td>gehe nach oben</td>
                </tr>
                <tr>
                    <td><span role="img">⬅️</span></td>
                    <td>gehe nach links</td>
                </tr>
                <tr>
                    <td><span role="img">➡️️️</span></td>
                    <td>gehe nach rechts</td>
                </tr>
                <tr>
                    <td><span role="img">⬇️️</span></td>
                    <td>gehe nach unten</td>
                </tr>
                <tr>
                    <td><span role="img">🇼️️️</span></td>
                    <td>Layer nach oben</td>
                </tr>
                <tr>
                    <td><span role="img">🇸️️️</span></td>
                    <td>Layer nach unten</td>
                </tr>
                <tr>
                    <td><span role="img">🇦️️</span></td>
                    <td>Helligkeit verringern</td>
                </tr>
                <tr>
                    <td><span role="img">🇩️</span></td>
                    <td>Helligkeit erhöhen</td>
                </tr>
                <tr>
                    <td><span role="img">🇳️️</span></td>
                    <td>Sättigung verringern</td>
                </tr>
                <tr>
                    <td><span role="img">🇲</span></td>
                    <td>Sättigung erhöhen</td>
                </tr>
                <tr>
                    <td><span role="img">🇻</span></td>
                    <td>Farben invertieren</td>
                </tr>
                <tr>
                    <td><span role="img">🇨</span></td>
                    <td>Alles rückgängig</td>
                </tr>
                </tbody>
            </Table>
    );
}

export default KeyboardTable;