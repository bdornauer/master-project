import Colors from '../Colors'

const defaultViewport = {
    invert: false,
    pixelReplication: false,
    voi: {
        windowWidth: 400,
        windowCenter: 200
    },
    scale: 1,
    translation: {
        x: 0,
        y: 0
    },
};

const dicomSettings = {
    width: "512px",
    height: "512px",
    backgroundColors: Colors.darkblue,
}

const config = {
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: true,
    taskConfiguration: {
        'decodeTask': { //Important
            initializeCodecsOnStartup: false,
            usePDFJS: false
        }
    }
};

let exampleJPG = 'https://rawgit.com/cornerstonejs/cornerstoneWebImageLoader/master/examples/Renal_Cell_Carcinoma.jpg';
let exampleDCM = 'wadouri:http://localhost:3000/test.DCM'
let exampleDCM2 = 'wadouri:https://raw.githubusercontent.com/cornerstonejs/cornerstoneWADOImageLoader/master/testImages/CT2_J2KR'
let exampleLocal = "wadouri:http://localhost:3000/localExample.DCM"

export default {config, defaultViewport, dicomSettings, exampleJPG, exampleDCM, exampleDCM2,exampleLocal}