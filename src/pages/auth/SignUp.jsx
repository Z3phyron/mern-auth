import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button, Loading } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { loadUser, reset, signUp } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Toast from "awesome-toast-component";

const SignUp = () => {
  const { token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

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
  }, [token, isError, isSuccess, message, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || password !== confirmPassword) {
      new Toast("passwords do not match!!!", {
        timeout: 1000,
      });
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      console.log(userData);
      dispatch(signUp(userData));
    
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="header">
          <h3>Create Account</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            suscipit.
          </p>
        </div>

        <div className="form-group">
          <Input
            fullWidth
            label="First Name"
            aria-label="input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />{" "}
          <Input
            fullWidth
            label="Last Name"
            aria-label="input"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <Input
            fullWidth
            label="Email"
            aria-label="input"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <Input.Password
            fullWidth
            label="Password"
            aria-label="input"
            name="password"
            value={password}
            onChange={onChange}
          />{" "}
          <Input.Password
            fullWidth
            label="Confirm Password"
            aria-label="input"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <small>
            Already got an account? <Link to="/sign-in">Sign In</Link>
          </small>
        </div>

        <Button auto type="submit">
          {isLoading ? (
            <Loading type="points" color={"white"} className={"btn"} />
          ) : (
            "Sign Up"
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
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  small {
    margin-left: auto;
  }

  .btn {
    margin-top: 20px;
  }
`;


export default SignUp;
