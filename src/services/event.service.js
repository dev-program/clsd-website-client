import axios from "axios";
import authHeader from "./auth-header";

import { API_URL } from "../config/index";

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "event", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "event", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `event/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `event/${id}`,  data, { "Content-Type": "multipart/form-data", headers: authHeader() });
};



const remove = (id, data) => {
  return axios.delete(API_URL + `event/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const removeAll = (id, data) => {
  return axios.delete(API_URL + `event/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};


const findByTitle = (title) => {
  return axios.get(API_URL + `event?title=${title}` , { headers: authHeader() } );
};

function getAllPublic() {
  return axios.get(API_URL + "public_event"  );
}

const getPublic = id => {
  return axios.get(API_URL + `public_event/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `public_event?title=${title}`  );
};

const UserService = {
  
  getAll,
  get,
  create,
  update,

  remove,
  removeAll,

  findByTitle,

  getAllPublic,
  getPublic,
  findByTitlePublic

};





export default UserService;
