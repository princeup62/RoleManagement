import React, { useState, useEffect } from "react";
import { postRoleManagement } from "./components/services/Actions/managementAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Add() {
  const managementState = useSelector((state) => state.managementReducer);

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    } else {
      history.push("/signup");
    }
  }, []);

  const dispatch = useDispatch();

  const [newRole, setNewRole] = useState("");

  function handleNewRole(event) {
    setNewRole(event.target.value);
  }

  function handleAddNewRole() {
    if (newRole.trim() === "") {
      alert("can not save on blank");
    } else if (
      managementState.filter((item) => item.roleName === newRole).length > 0
    ) {
      alert("role are already in list");
    } else {
      dispatch(postRoleManagement(newRole));
      setNewRole("");
      history.push("/");
    }
  }

  return (
    <div className="container bg-light mt-5 p-3">
      <div className="add-new-role-inner-wrapper">
        <div className="row">
          <div className="col-md-10 my-3">
            <input
              class="form-control circular-input mb-3 "
              type="text"
              placeholder="Role name"
              value={newRole}
              onChange={handleNewRole}
            />
          </div>
        </div>
        {console.log(managementState)}
        <h3 className="mb-5">Menu</h3>
        <select
          class="class=custom-select multiple  col-md-8 mb-3 p-2"
          id="inputGroupSelect03"
        >
          {managementState.map((item) => (
            <option key={item.id}>{item.roleName}</option>
          ))}
        </select>
        <br />

        <div className="col-md-4 d-flex justify-content-between my-3">
          <button
            type="button"
            class="btn btn-primary btn-md rounded-pill px-4"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-md rounded-pill px-4"
            onClick={handleAddNewRole}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
