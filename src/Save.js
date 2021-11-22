import React from 'react'
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import { THEME } from './Theme';
import './Save.scss';

const Save = ({ newSave }) => {
    return (
        <div className="saveIcon">
            <IconButton onClick={newSave} sx={{backgroundColor: THEME.palette.primary.dark}}>
                <BsFileEarmarkArrowDown className="savePic" />
            </IconButton>
        </div>
    )
}

export default Save
