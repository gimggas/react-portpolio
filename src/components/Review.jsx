import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Review() {
  return (
    <Card id="review-container">
      <Card.Body>
        <Card.Img variant="top" src="/images/review_01.jpg" />
        <Card.Title>[영앤도터스] 룰라바이</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Review;
