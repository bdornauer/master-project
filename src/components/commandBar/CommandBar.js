import React, {useEffect, useState} from 'react';
//Icons
import arrowLeft from '../icons/arrowLeft.svg'
import arrowRight from '../icons/arrowRight.svg'
import arrowUp from '../icons/arrowUp.svg'
import arrowDown from '../icons/arrowDown.svg'
import contrastMinus from '../icons/brightnessMinus.svg'
import contrastPlus from '../icons/brightnessPlus.svg'
import menu1 from '../icons/menu1.svg'
import menu2 from '../icons/menu2.svg'
import minus from '../icons/minus.svg'
import plus from '../icons/plus.svg'
import saturationMinus from '../icons/saturationMinus.svg'
import saturationPlus from '../icons/saturationPlus.svg'
import zoomIn from '../icons/ZoomIn.svg'
import zoomOut from '../icons/ZoomOut.svg'
import invert from '../icons/invert.svg'
import cancel from '../icons/cancel.svg'
import Icon from "./Icon";
//Show
import css from './CommandBar.css';
import cornerstone from "cornerstone-core";
import configurations from "../dicomViewer/DicomViewerDefaultConfiguration";


function CommandBar(props) {
    const iconSetting = {width: 70, height: 70};

    useEffect(() => {
        switch (props.selectedCommand) {
            case "":
                setActiveStatus(standardActivation);
                break;
            case "zoomIn":
                setActiveStatus(prevState => ({...prevState, zoomInActive: true}));
                break;
            case "zoomOut":
                setActiveStatus(prevState => ({...prevState, zoomOutActive: true}));
                break;
            case "goLeft":
                setActiveStatus(prevState => ({...prevState, goLeftActive: true}));
                break;
            case "goUp":
                setActiveStatus(prevState => ({...prevState, goUpActive: true}));
                break;
            case "goDown":
                setActiveStatus(prevState => ({...prevState, goDownActive: true}));
                break;
            case "goRight":
                setActiveStatus(prevState => ({...prevState, goRightActive: true}));
                break;
            case "layerUp":
                setActiveStatus(prevState => ({...prevState, layerUpActive: true}));
                break;
            case "layerDown":
                setActiveStatus(prevState => ({...prevState, layerDownActive: true}));
                break;
            case "brightnessDown":
                setActiveStatus(prevState => ({...prevState, brigthnessDownActive: true}));
                break;
            case "brightnessUp":
                setActiveStatus(prevState => ({...prevState, brigthnessUpActive: true}));
                break;
            case "saturationDown":
                setActiveStatus(prevState => ({...prevState, saturationDownActive: true}));
                break;
            case "saturationUp":
                setActiveStatus(prevState => ({...prevState, saturationUpActive: true}));
                break;
            case "invert":
                setActiveStatus(prevState => ({...prevState, invertActive: true}));
                break;
            case "default":
                console.log("ok")
                setActiveStatus(prevState => ({...prevState, defaultActive: true}));
                break;
            default:
                break;
        }
    }, [props.selectedCommand])

    useEffect(() => {
        switch (props.switchMenu) {


        }
    }, [props.switchMenu])

    const standardActivation = {
        zoomInActive: false,
        zoomOutActive: false,
        goLeftActive: false,
        goUpActive: false,
        goDownActive: false,
        goRightActive: false,
        layerUpActive: false,
        layerDownActive: false,
        brigthnessDownActive: false,
        brigthnessUpActive: false,
        saturationDownActive: false,
        saturationUpActive: false,
        invertActive: false,
        cancelActive: false,
        menu1Active: false,
        menu2Active: false,
    }


    const [activeStatus, setActiveStatus] = useState(
        standardActivation
    );

    function switchMenu() {
        setActiveStatus(prevState => ({
            ...prevState, menu1Active: !prevState.menu1Active
        }));
    }

    function menuBar1() {
        return (<>
            <Icon icon={zoomIn} isActive={activeStatus.zoomInActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={zoomOut} isActive={activeStatus.zoomOutActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={arrowLeft} isActive={activeStatus.goLeftActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={arrowUp} isActive={activeStatus.goUpActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={arrowDown} isActive={activeStatus.goDownActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={arrowRight} isActive={activeStatus.goRightActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={plus} isActive={activeStatus.layerUpActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={minus} isActive={activeStatus.layerDownActive} width={iconSetting.width}
                  height={iconSetting.height}/>
            <Icon icon={menu2} isActive={activeStatus.menu1Active} width={iconSetting.width}
                  height={iconSetting.height}/></>)
    }

    function menuBar2() {
        return (<>
                <Icon icon={saturationMinus} isActive={activeStatus.brigthnessDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={saturationPlus} isActive={activeStatus.brigthnessUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={contrastMinus} isActive={activeStatus.saturationDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={contrastPlus} isActive={activeStatus.saturationUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={invert} isActive={activeStatus.invertActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={cancel} isActive={activeStatus.defaultActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={menu1} isActive={activeStatus.menu1Active} width={iconSetting.width}
                      height={iconSetting.height}/></>

        )
    }

    function menuBarTotal() {
        return (<>
                <Icon icon={zoomIn} isActive={activeStatus.zoomInActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={zoomOut} isActive={activeStatus.zoomOutActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={arrowLeft} isActive={activeStatus.goLeftActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={arrowUp} isActive={activeStatus.goUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={arrowDown} isActive={activeStatus.goDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={arrowRight} isActive={activeStatus.goRightActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={minus} isActive={activeStatus.layerDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={plus} isActive={activeStatus.layerUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={saturationMinus} isActive={activeStatus.brigthnessDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={saturationPlus} isActive={activeStatus.brigthnessUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={contrastMinus} isActive={activeStatus.saturationDownActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={contrastPlus} isActive={activeStatus.saturationUpActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={invert} isActive={activeStatus.invertActive} width={iconSetting.width}
                      height={iconSetting.height}/>
                <Icon icon={cancel} isActive={activeStatus.defaultActive} width={iconSetting.width}
                      height={iconSetting.height}/></>
        )
    }

    return (
        <div style={{margin: "20px"}}>
            <div className={css.containerIcons}>
                {props.switchMenu ? (activeStatus.menu1Active ? menuBar2() : menuBar1()) : menuBarTotal()}
            </div>
        </div>
    )
        ;
}


export default CommandBar;