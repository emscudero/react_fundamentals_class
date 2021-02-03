

import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailOnChange(e) {
    // event.target.value
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function passwordOnChange(e) {
      console.log(e.target.value);
    setPassword(e.target.value);
  }
  return (
    <div>
        <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => emailOnChange(e)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => passwordOnChange(e)}
      />
    </div>
  );
};

export default SignUp;
