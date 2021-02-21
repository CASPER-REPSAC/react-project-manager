import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const Example = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Auth
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>인증하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            권한 상승을 위해 토큰 값을 입력해 주세요.
            <input type="text" className="form-control" placeholder="Input token."/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example;