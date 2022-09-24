import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Loading } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn, reset } from "../../features/auth/AuthSlice";

const ForgotPassword = () => {
  const { email, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    userEmail: "",
  });

  const { userEmail } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    // if (isError) {
    //   // toast.error(message);
    // }
    // const {token} = user
    if (isSuccess || email) {
      setTimeout(() => {
        
      }, 3000);
      navigate("/");
    }

    dispatch(reset());
  }, [email, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userEmail
    };
    // console.log(userData);
    dispatch(signIn(userData));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="header">
          <h3>Forgot Password</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            suscipit.
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            aria-label="input"
            type="email"
            name="email"
            value={userEmail}
            onChange={onChange}
          />
        </div>

        <Button auto type="submit">
          {isLoading ? (
            <Loading type="points" color={"white"} className={"btn"} />
          ) : (
            "Sign In"
          )}
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Form = styled.form`
  padding: 5%;
  .header {
    margin-bottom: 20px;
  }

  .form-group {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    small {
      margin-left: auto;
    }
  }

  /* .btn {
    margin-top: 20px;
  } */
`;


export default ForgotPassword;
