import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Protected({ Cmp }) {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    } else {
      history.push("/signup");
    }
  }, []);

  return (
    <>
      <Cmp />
    </>
  );
}

export default Protected;
