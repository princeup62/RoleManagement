import React, { useState } from "react";
import "../../src/App.css";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [logInData, setlogInData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    async function logger() {
      const response = await fetch(
        `https://612b180922bb490017893a11.mockapi.io/log//log?email=${logInData.email}`
      );
      const data = await response.json();

      if (data.length > 0) {
        if (data[0].password === logInData.password) {
          console.log(data[0]);
          localStorage.setItem("user-info", JSON.stringify(data[0]));
          history.push("/");
        }
      } else {
        alert("please enter correct email Id and password");
      }
    }

    logger();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setlogInData({ ...logInData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login-form mx-auto mt-5 p-5">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Log In</h1>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={logInData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={logInData.password}
                onChange={handleChange}
              />
            </div>

            <h5 className="mt-3 text-right ">
              have already account?
              <span
                className="text-info link-log"
                onClick={() => history.push("/SignUp")}
              >
                click here to Sign Up
              </span>
            </h5>

            <button className="btn btn-primary rounded-pill mt-4">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
