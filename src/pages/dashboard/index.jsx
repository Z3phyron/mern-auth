import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Index = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Container>
        <Wrap>
          <h3>Welcome {`${user?.firstName} ${user?.lastName}`}</h3>
          <ul>
            <li>
              FirstName: <span>{user?.firstName}</span>{" "}
            </li>
            <li>
              LastName: <span>{user?.lastName}</span>{" "}
            </li>
            <li>
              Email: <span>{user?.email}</span>{" "}
            </li>
            <li>
              isCustomer: <span>{user?.isCustomer ? "True" : "False"}</span>{" "}
            </li>
            <li>
              isAdmin: <span> {user?.isAdmin ? "True" : "False"}</span>
            </li>
          </ul>
        </Wrap>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Wrap = styled.div`
  h3 {
    margin-bottom: 30px;
  }
  ul {
    display: grid;
    grid-gap: 20px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.671);

    span {
        font-size: 22px;
        color: #c549c5;
    }
  }
`;

export default Index;
