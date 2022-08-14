import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sorting Option">
      <Dropdown.Item href="#/action-1">추천순</Dropdown.Item>
      <Dropdown.Item href="#/action-2">판매인기순</Dropdown.Item>
      <Dropdown.Item href="#/action-3">낮은가격순</Dropdown.Item>
      <Dropdown.Item href="#/action-4">높은가격순</Dropdown.Item>
      <Dropdown.Item href="#/action-5">상품평순</Dropdown.Item>
      <Dropdown.Item href="#/action-6">등록일순</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
