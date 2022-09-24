import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Loading } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn, reset, loadUser } from "../../features/auth/AuthSlice";
import Toast from "awesome-toast-component";

const SignIn = () => {
  const { user, token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      new Toast(message, {
        timeout: 1000,
      });
    }
    // const {token} = user
    if (isSuccess || token) {
      setTimeout(() => {
        dispatch(loadUser());
      }, 2000);
      navigate("/");
      new Toast(message, {
        timeout: 1000,
      });
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      new Toast("Please Fill in the password!!!", {
        timeout: 1000,
      });
    } else {
      const userData = {
        email,
        password,
      };
      // console.log(userData);
      dispatch(signIn(userData));
      
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="header">
          <h3>Sign In</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            suscipit.
          </p>
        </div>

        <div className="form-group">
          <Input
            label="Email"
            aria-label="input"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <Input.Password
            label="Password"
            aria-label="input"
            onChange={onChange}
            value={password}
            name="password"
          />
          <small className={"small"}>
            <Link to="/forgot-password">Forgot password ?</Link>
          </small>
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
    h3 {
      margin-bottom: 20px;
    }
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
const Image = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SignIn;
