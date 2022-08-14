import React from "react";

const Input = styled.input`
  padding: 8px;
  margin: 10px;
  color: ${(props) => props.inputColor || "blue"};
  background: yellow;
  border-radius: 5px;
`;

export default function StyledComponents() {
  return <Input type="text" defaultValue="input-text" inputColor="red" />;
}
