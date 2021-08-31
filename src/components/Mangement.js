import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchMangement } from "./services/Actions/managementAction";
import { useHistory } from "react-router-dom";

function Mangement() {
  const managementState = useSelector((state) => state.managementReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(fetchMangement());
  }, []);

  const [filterData, setFilterData] = useState("");

  console.log(managementState);

  return (
    <div className="container mt-5 bg-light">
      <div className="row ">
        <div className="col-md-10 my-3">
          <input
            class="form-control circular-input"
            type="text"
            placeholder="Search"
            value={filterData}
            onChange={(event) => setFilterData(event.target.value)}
          />
        </div>

        {console.log("hello", managementState)}

        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-primary rounded-pill my-3"
            onClick={() => history.push("/add")}
          >
            Create new Role
          </button>
        </div>
      </div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Role Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {managementState
            .filter((item) => item.roleName.includes(filterData))
            .map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.roleName}</td>
                <td>
                  <EditIcon />
                  <button className="btn btn-sm btn-primary ml-4">
                    {item.Actions ? "on" : "off"}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mangement;
