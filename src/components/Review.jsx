import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Time({tim}) {
    console.log(tim);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
         <Button  onClick={handleShow}>
        Review
      </Button>
{
tim?.map(item=>(

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title style={{fontSize:'40px'}}>{item.patient_name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Date:{item.date}</Modal.Body>
    <Modal.Body>{item.comments}</Modal.Body>
    <Modal.Body>Rating:<i class="fa-sharp fa-solid fa-star" style={{color:" yellow"}}></i>{item.rating}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

))

}
     
    </div>
  )
}

export default Time