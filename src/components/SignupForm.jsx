import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisable, setIsButtonDisabled] = useState(true);

  // const handleClickSignup = () => {
  //   axios
  //     .post(
  //       "https://www.pre-onboarding-selection-task.shop/",
  //       {
  //         email: email,
  //         password: password,
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     )
  //     .then(() => navigate("/signin"));
  // };

  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setIsButtonDisabled(false);
    } else setIsButtonDisabled(true);
  }, [email, password]);

  return (
    <FormWrapper>
      <input
        id="input-email"
        data-testid="email-input"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="input-password"
        data-testid="password-input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        data-testid="signup-button"
        disabled={isButtonDisable}
        // onClick={handleClickSignup}
      >
        회원가입
      </button>
    </FormWrapper>
  );
};

const FormWrapper = styled.section`
  display: flex;
`;

export default SignupForm;
