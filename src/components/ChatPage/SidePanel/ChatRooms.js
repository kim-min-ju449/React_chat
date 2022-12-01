import React, {Component} from "react";
import {FaRegSmileWink} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
export class ChatRooms extends Component(){

    state = {
        show:false
    }

    handleClose = () => this.setState({show:false});
   handleShow = () => this.setState({show: true});

    render(){
        return(
            <div>
                <div style={{position:'relative', width:'100%', display:'flex', alignItems:'center'}}/>
                <FaRegSmileWink style={{marginRight:3}}/>
                CHAT ROOMS
                <FaPlus style={{position:'absolute', right:0, cursor:'pointer'}}/>
            
             
             <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a chat room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>방 이름</Form.Label>
        <Form.Control type="text" placeholder="Enter a chat room name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>방설명</Form.Label>
        <Form.Control type="text" placeholder="Enter a chat room description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="seconary" onClick={this.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>

                </Modal.Footer>

             </Modal>
            </div>
        )
    }
}
export default ChatRooms;