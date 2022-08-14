/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = "white";

export default function Emotion() {
  return (
    <>
      <Button>Button</Button>
    </>
  );
}
