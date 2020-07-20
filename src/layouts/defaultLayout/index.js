import React from "react";
import {Container} from "./styles";

const DefaultLayout = props => {
  return (
    <>
        <Container className="container">{props.children}</Container>
      
    </>
  );
};
export default DefaultLayout;
