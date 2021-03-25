import React from "react";

const AuthForm = ({
  purpose,
  email,
  password,
  emailError,
  passwordError,
  authAction,
  setEmail,
  setPassword,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="email"> Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{emailError}</p>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{passwordError}</p>
      </div>
      <button onClick={authAction}>{purpose}</button>
    </div>
  );
};

export default AuthForm;
