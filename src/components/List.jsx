import ListGroup from "react-bootstrap/ListGroup";
import CheckReverseExample from "./Checkbox";

function FlushExample() {
  return (
    <ListGroup variant="flush" id="list">
      <ListGroup.Item>
        <h2>커피 찾기</h2>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>디카페인</h3>
      </ListGroup.Item>
      <ListGroup.Item id="flavor">
        <h3>맛과 향</h3>
        <CheckReverseExample />
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>로스팅 포인트</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>원산지</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>가공 방법</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>가격대</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3>원두 특징</h3>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default FlushExample;
