import React, { useState } from "react";
import "../../src/App.css";
import { useHistory } from "react-router-dom";

function SingnUp() {
  let history = useHistory();

  const [singnUpData, setsingnUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setsingnUpData({ ...singnUpData, [name]: value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    if (
      singnUpData.name.trim() !== "" ||
      singnUpData.email.trim() !== "" ||
      singnUpData.password.trim() !== ""
    ) {
      async function signUp() {
        let result = await fetch(
          "https://612b180922bb490017893a11.mockapi.io/log//log",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(singnUpData),
          }
        );
        result = await result.json();
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/");
      }

      signUp();
    } else alert("can't save on blank");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login-form mx-auto mt-5 p-5">
          <form onSubmit={handleSignUp}>
            <h1 className="text-center">Sign Up</h1>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={singnUpData.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email id</label>
              <input
                type="text"
                className="form-control"
                value={singnUpData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                value={singnUpData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <h5 className="mt-3 text-right ">
              have already account?
              <span
                className="text-info link-log"
                onClick={() => history.push("/login")}
              >
                click here to Log In
              </span>
            </h5>
            <button className="btn btn-primary rounded-pill mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingnUp;
