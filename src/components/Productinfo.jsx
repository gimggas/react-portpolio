import ListGroup from "react-bootstrap/ListGroup";
import BasicExample from "./Accordion";
import Capacity from "./Capacity";
import Smash from "./Smash";
import { useDispatch, useSelector } from "react-redux";
import { minusCount } from "./store";
import { addCount } from "./store";

function Productinfo() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="title">
        <h2>스프링 블렌드</h2>
        <p>#밀크초코 은은함</p>
        <span>4,000원</span>
      </ListGroup.Item>
      <ListGroup.Item className="selection">
        <div className="capacity">
          <p>원두 용량</p>
          <Capacity />
        </div>
        <div className="smash">
          <p>분쇄 선택</p>
          <Smash />
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="shopping_basket">
        <div className="calculation">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="cart">
          <button>Add to Cart</button>
        </div>
      </ListGroup.Item>
      <ListGroup.Item>
        제조사 : (주)콩볶는 사람들<br></br>
        원산지 : 브라질, 콜롬비아, 에티오피아<br></br>
        구성품 : 스프링 블렌드(200g, 500g, 1kg)
      </ListGroup.Item>

      <BasicExample />
    </ListGroup>
  );
}

export default Productinfo;
