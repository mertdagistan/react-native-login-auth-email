import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { email: null, password: null };
    case "signin":
      return { email: action.payload.email, password: action.payload.password };
    default:
      return state;
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Do some API Request here
    dispatch({
      type: "signin",
      payload: {
        email: email,
        password: password,
      },
    });
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { email: null, password: null }
);
