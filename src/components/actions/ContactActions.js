import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "./types";
import request from "superagent";

export const getContacts = () => async (dispatch) => {
  const res = await request.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.body,
  });
};

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact,
  };
};
