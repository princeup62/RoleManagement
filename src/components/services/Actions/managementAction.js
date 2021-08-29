export const addToManagement = (data) => {
  return {
    type: "ADD_TO_MANAGEMENT",
    payload: data,
  };
};

export const Add = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const fetchMangement = () => {
  return async function (dispatch) {
    const response = await fetch(
      `https://61292da4068adf001789b801.mockapi.io//role`
    );
    const data = await response.json();
    await dispatch(addToManagement(data));
  };
};

export const postRoleManagement = (data) => {
  return function (dispatch) {
    fetch("https://61292da4068adf001789b801.mockapi.io//role", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ roleName: data, Actions: false }),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        dispatch(Add(resp));
        alert("added");
      });
    });
  };
};

export default addToManagement;

//this mock api created by princesh208@gmail.com
