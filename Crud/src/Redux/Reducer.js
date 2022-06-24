import * as con from "./Constant";

const inital = {
  users: [],
};

export const usersReducer = (state = { inital }, action) => {
  switch (action.type) {
    case con.GET_USER:
      return { ...state, users: action.payload };
    case con.DEL_USER:
    case con.ADD_USER:
      return { ...state };
    default:
      return state;
  }
};
