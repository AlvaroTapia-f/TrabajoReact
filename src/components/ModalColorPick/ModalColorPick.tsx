import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

type ModalColorPickProps = {
    show: boolean;
    onHide: ()=> void;
    handleColorChange: (color: string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}: ModalColorPickProps)=>{
    
    const [selectedColor, setSelectedColor] = useState("#FFF");

    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSelectedColor(event.target.value);
    }

    const handleAcceptClick = ()=>{
        handleColorChange(selectedColor);
        onHide();
    };


    
    return(
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <ModalHeader closeButton>
                <ModalTitle>Cambiar color</ModalTitle>
            </ModalHeader>
            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">Elige un color</Form.Label>
                <Form.Control type="color" id="exampleColorInput" defaultValue="#FFF" title="Elige tu color" onChange={handleColorPickerChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={handleAcceptClick}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalColorPick;