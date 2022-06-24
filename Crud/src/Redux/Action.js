import * as con from "./Constant";
import axios from "axios";

const api = "http://localhost:5000/users";

const getUser = (data) => ({
  type: con.GET_USER,
  payload: data,
});
const adUser = (data) => ({
  type: con.ADD_USER,
});

const Userdeletd = (data) => ({
  type: con.DEL_USER,
});
const edUser = (data) => ({
  type: con.GET_USER,
  payload: data,
});

export const loadUser = () => async (dispatch) => {
  const user = await axios.get(`${api}`);
  dispatch(getUser(user.data));
};

export const addUser = (dat) => async (dispatch) => {
  await axios.post(`${api}`, dat);
  dispatch(adUser());
  dispatch(loadUser());
};

export const editUser = (dat) => async (dispatch) => {
  await axios.post(`${api}`, dat);
  dispatch(edUser());
  dispatch(loadUser());
};
export const deletUser = (id) => async (dispatch) => {
  await axios.delete(`${api}/${id}`);
  dispatch(Userdeletd());
  dispatch(loadUser());
};
