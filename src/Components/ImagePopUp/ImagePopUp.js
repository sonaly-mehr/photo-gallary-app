import React from 'react';
import '../ImageDetail/ImageDetail.css'
import { Dialog, DialogContent } from '@mui/material'

const ImagePopUp = (props) => {
    const { children, openPopUp, setOpenPopUp } = props;
    return (
        <Dialog open={openPopUp}>
            <div className="modal-cross-btn">
                <button onClick={()=> setOpenPopUp(false)}>X</button>
            </div>
            <DialogContent className='dialog-content'>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default ImagePopUp;