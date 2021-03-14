import React, { useState } from "react";
import StyledSignin from "./StyledSignin";

const initState = {
  email: "",
  password: "",
};

const Signin = (props) => {
  const [form, setForm] = useState(initState);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setForm(initState)
  };

  return (
    <StyledSignin onSubmit={submitHandler}>
      <label htmlFor="email">
        email:{" "}
        <input
          placeholder="email"
          id="email"
          type="text"
          value={form.email}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="password">
        password:{" "}
        <input
          placeholder="password"
          id="password"
          type="text"
          value={form.password}
          onChange={changeHandler}
        />
      </label>

      <button>Signin</button>
    </StyledSignin>
  );
};

export default Signin;
