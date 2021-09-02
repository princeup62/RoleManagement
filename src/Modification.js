import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Modification() {
  const APIdata = useSelector((state) => state.managementReducer);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(3);

  const handleShowperPage = (event) => {
    setrowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <div className="text-white">
      {console.log("APIdata", APIdata)}

      {console.log("Slice", APIdata.slice(0, 4))}

      <div className="container mt-5 bg-light">
        <div>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Role Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {APIdata.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((item) => (
                <tr key={item.id}>
                  <th scope="col">{item.id}</th>
                  <th scope="col">{item.roleName}</th>
                  <th scope="col">{item.Actions ? "true" : "false"}</th>
                </tr>
              ))}
            </tbody>
          </table>

          <div className=" text-dark d-flex justify-content-between">
            <span className="">{`Showing ${page * rowsPerPage + 1} to ${
              page * rowsPerPage + rowsPerPage
            } of ${APIdata.length} entries`}</span>
            <span>
              Show
              <select
                class="custom-select"
                id="inputGroupSelect01"
                name="showPerPage"
                onChange={handleShowperPage}
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
              </select>
              Entries
            </span>

            {/* {alert(APIdata.length/rowsPerPage)} */}
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-info"
                onClick={() =>
                  page > 0
                    ? setPage(page - 1)
                    : alert("you are already on first page")
                }
              >
                Previous
              </button>
              <button type="button" class="btn btn-primary">
                {page + 1}
              </button>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => {
                  page < APIdata.length / rowsPerPage - 1
                    ? setPage(page + 1)
                    : alert("reached on last");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modification;
