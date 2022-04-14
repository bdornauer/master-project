import './App.css';
import SpeechController from './components/controllers/speechController/SpeechController'
import EyeTrackingController from './components/controllers/eyeTrackingController/EyeTrackingController'
import GestureController from "./components/controllers/gestureController/GestureController";
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StartMenu from "./components/startMenu/StartMenu";
import KeyboardController from "./components/controllers/keyboardController/KeyboardController";

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='' element={<StartMenu/>}/>
                    <Route path='keyboardController' element={<div><Header/><KeyboardController/></div>}/>
                    <Route path='eyeTrackingController' element={<div><Header/><EyeTrackingController/></div>}/>
                    <Route path='speechController' element={<div><Header/><SpeechController/></div>}/>
                    <Route path='gestureController' element={<div><Header/><GestureController/></div>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;