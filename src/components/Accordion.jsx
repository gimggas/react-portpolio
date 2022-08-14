import React from "react";
import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Product Details</Accordion.Header>
        <Accordion.Body>
          Our Customer Experience Team is available 7 days a week and we offer 2
          ways to get in contact.Email and Chat . We try to reply quickly, so
          you need not to wait too long for a response!.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Additional Information</Accordion.Header>
        <Accordion.Body>
          Please read the documentation carefully . We also have some online
          video tutorials regarding this issue . If the problem remains, Please
          Open a ticket in the support forum
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Customer Reviews</Accordion.Header>
        <Accordion.Body>
          At first, Please check your internet connection . We also have some
          online video tutorials regarding this issue . If the problem remains,
          Please Open a ticket in the support forum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
