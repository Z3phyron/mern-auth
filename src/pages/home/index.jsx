import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <Container>
        <Wrap>
          Welcome !!!
        </Wrap>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Wrap = styled.div`
  /* padding: 10px; */
`;

export default index;
