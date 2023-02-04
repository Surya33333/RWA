import {react} from 'react';
import "./Modal.scss";

const Modal = ({closeModal}) => {
    return(
        <div className="mainmodal">
            <div className="mapmodal">
            <div className="head">
            <p className="modalhead">Select Your PickUp Address</p>
            <p className="modalclosebtn" onClick={() => {closeModal(false)}}>X</p>
            </div>
            <div className="body">
                <p>Modal Content</p>
            </div>
            <div className="foot">
                <button onClick={() => {closeModal(false)}}>Close</button>
            </div>
        </div>
        </div>
    )
}

export default Modal