import React, { useState } from "react";
import { Button, Card, FormControl } from "react-bootstrap";
import "../ChatBox.css";
import { Search, Sliders2 } from "react-bootstrap-icons";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-box">
      <Button onClick={toggleChat} className="chat-button btn-light">
        <i className="bi bi-person-circle me-2 fs-3 p-0"></i>Messaggistica
        <i className="bi bi-three-dots ms-5"></i>
        <i className="bi bi-pencil-square ms-3"></i>
        <i className="bi bi-chevron-compact-up ms-3"></i>
      </Button>
      {isOpen && (
        <Card className="chat-content ">
          <Card.Header className="d-flex align-items-center bg-search p-0 m-1 border border-radius-2">
            <div className="search-form d-flex align-items-center bg-search border border-radius-2">
              <Search className="search-icon ms-2" />
              <FormControl
                type="text"
                placeholder="Cerca Messaggi"
                className="ml-2 form-ms bg-search border border-radius-2 p-0 ps-2"
              />
            </div>
            <Button variant="link" className="ml-auto">
              <Sliders2 className="text-black" />
            </Button>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ChatBox;
