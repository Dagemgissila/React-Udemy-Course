import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const isValidEmail = validation.email && !enteredValues.email.includes("@");

  function handleInputChange(identifier, event) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
    setValidation((preState) => ({
      ...preState,
      [identifier]: false,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleBlur(identifier) {
    setValidation((preState) => ({
      ...preState,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={enteredValues.email}
            onBlur={() => handleBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
            name="email"
          />
          <div>{isValidEmail && <p>please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={enteredValues.password}
            onChange={(event) => handleInputChange("password", event)}
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
