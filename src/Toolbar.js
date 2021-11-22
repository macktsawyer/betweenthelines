import React, { useRef, useState } from 'react';
import './Toolbar.scss';
import { ChromePicker } from 'react-color';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { BsPaintBucket, BsPencil, BsXCircle } from 'react-icons/bs'
import { IoIosUndo, IoIosRedo } from 'react-icons/io';
import {THEME, LEVELS} from './Theme.js'; // Consts import from another file for cleaner code

const Toolbar = ({ clearClick, newColorClick, newToolClick, newThickness, undoDraw, redoDraw }) => {
    const colorDropDownRef = useRef(null);
    const [isColorActive, setIsColorActive] = useState(false);
    const [currentColor, setCurrentColor] = useState('#000000');
    const colorClick = () => setIsColorActive(!isColorActive);

    function getValue(value) {
        return `${value}`; // Value needed to show active value on slider
    }

    function offClick() {
        setIsColorActive(false);
    }

    return (
        <div className="toolBar">
            <ul>
                <li>
                    <Button variant="contained" size="small"
                    sx={{backgroundColor: THEME.palette.primary.dark}} 
                    onClick={undoDraw}>Undo &nbsp;<IoIosUndo className="svgIcon" /></Button>
                </li>
                <li>
                    <Button variant="contained" size="small"
                    sx={{backgroundColor: THEME.palette.primary.dark}} 
                    onClick={redoDraw}>Redo &nbsp;<IoIosRedo className="svgIcon"/></Button>
                </li>
                <li>
                    <Button variant="contained" size="small" 
                    sx={{backgroundColor: THEME.palette.primary.dark}} 
                    onClick={newToolClick} value={'Line'}>
                        Line &nbsp;
                        <BsPencil className="svgIcon" />
                    </Button>
                </li>
                <li>
                    <Button variant="contained" size="small" 
                    sx={{backgroundColor: THEME.palette.primary.dark}} 
                    onClick={newToolClick} value={'Fill'}>Fill &nbsp; <BsPaintBucket className="svgIcon" /> </Button>
                </li>
                <li>
                    <Button variant="contained" size="small" 
                    sx={{backgroundColor: THEME.palette.primary.dark}} 
                    onClick={clearClick}>Clear &nbsp; <BsXCircle className="svgIcon" /></Button>
                </li>
                <li>
                    <div>
                        <Button className="colorButton"
                        sx={{backgroundColor: THEME.palette.primary.main}} 
                        onClick={colorClick}
                        >
                            <div style={{backgroundColor: `${currentColor}`}} className="colorBox"></div>
                        </Button>
                        <div ref={colorDropDownRef} className={`menu ${isColorActive ? 'active' : 'inactive'}`}>
                            < ChromePicker color={currentColor} onChange={e => {
                                setCurrentColor(e.hex); // Current color needs to be set in state here and used in callback
                                newColorClick(e) // This allows us to change color inside the button and in canvas.js
                                }} />
                        </div>
                    </div>
                </li>
                <div className="sliderBox">
                    <Slider
                        aria-label="Line-Width"
                        defaultValue={6}
                        getAriaValueText={getValue}
                        step={2}
                        valueLabelDisplay="auto" // All these settings for one little slider
                        marks={LEVELS}
                        max={16}
                        min={2}
                        value={LEVELS.value}
                        onChange={newThickness} // Using callback function prop
                        sx={{
                            color: THEME.palette.primary.main, // Setting theme info for slider
                            '& .MuiSlider-thumb': {
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${(THEME.palette.primary.main, 0.16)}`,
                                },
                                '&.Mui-active': {
                                    boxShadow: `0px 0px 0px 14px ${(THEME.palette.primary.main, 0.16)}`,
                                },
                            },
                        }}
                    />
                </div>
            </ul>
            <div onClick={offClick} className={`cover ${isColorActive ? 'active' : 'inactive'}`}>

            </div>
        </div>
    )
}

export default Toolbar
