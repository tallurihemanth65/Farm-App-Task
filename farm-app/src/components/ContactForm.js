import React, { useEffect, useState } from "react";
import "../index.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getData } from "../utilities/sliceFormData";

const ContactForm = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber: ""
  });

  let name, value;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const dispatch = useDispatch();

  const handleAddData = () => {
    if (
      user.firstname &&
      user.lastname &&
      user.email &&
      user.address &&
      user.phonenumber &&
      phoneNumberValid // Check if phone number is valid
    ) {
      dispatch(getData(user));
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phonenumber: ""
      });
    }
  };

  const handleClear = () => {
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: ""
    });
  };

  const DummyData = useSelector((dd) => {
    return dd.data;
  });

  console.log(DummyData);

  function regExp(inputEntered) {
    return /^\+91[7-9]\d{9}$/.test(inputEntered);
  }

  const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  const handleBlur = (event) => {
    const inputEntered = event.target.value;
    const isValidLength = inputEntered.length === 13; 
    const isValidFormat = regExp(inputEntered); 
    setPhoneNumberValid(isValidLength && isValidFormat);
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div className="bg-img">
      <Modal show={show} onHide={handleClose}>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Farm Contact Form </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" name="firstname" value={user.firstname} onChange={handleInput} placeholder="First name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" name="lastname" value={user.lastname} onChange={handleInput} placeholder="Last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={user.email} placeholder="example@gmail.com" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" name="address" value={user.address} rows={2} onChange={handleInput}  placeholder="Address"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="text" name="phonenumber" value={user.phonenumber} placeholder="+91-" onBlur={handleBlur} onChange={handleInput} isInvalid={!phoneNumberValid} />
                  <Form.Control.Feedback type="invalid">
                    Please enter the valid number and number should start with +91.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClear}>
                Clear
              </Button>
              <Button variant="success" className="clicked" onClick={handleAddData}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
