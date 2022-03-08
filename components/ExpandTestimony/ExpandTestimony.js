import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap'

const ExpandTestimony = (props) => {
  const bill = props.bill
  const testimony = props.testimony
  const [showTestimony, setShowTestimony] = useState(false);

  const handleShowTestimony = () => setShowTestimony(true);
  const handleCloseTestimony = () => setShowTestimony(false);
  return (
  <>
    <Button variant="primary" onClick={handleShowTestimony}>
      Expand
    </Button>
    <Modal show={showTestimony} onHide={handleCloseTestimony} size="lg">
      <Modal.Header closeButton onClick={handleCloseTestimony}>
          <Modal.Title>{bill ? bill.BillNumber + " - " + bill.Title : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {/* need to hide author display name if testimony is anonymous */}
          <h4>{testimony ? (testimony.authorDisplayName == null ? "John Doe" : testimony.authorDisplayName) + " - " + testimony.publishedAt.toDate().toLocaleString() + " - " + testimony.position : ""}</h4>
          <p>{testimony ? testimony.content : ""}</p>
          <h4>
            {testimony && testimony.attachment != null ? 
            <Button variant="primary">
              See attachment
            </Button> 
            : 
            ""}
          </h4>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default ExpandTestimony