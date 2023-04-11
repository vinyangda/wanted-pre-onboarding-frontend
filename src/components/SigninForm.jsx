import React, { useState } from "react";
import styled from "styled-components";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(setEmail);
  return (
    <FormWrapper>
      <input
        data-testid="email-input"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="password-input"
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button data-testid="signup-button">회원가입</button>
    </FormWrapper>
  );
};

const FormWrapper = styled.section`
  display: flex;
`;

export default SigninForm;
