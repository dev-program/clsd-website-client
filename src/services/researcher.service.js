import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../config/index"

// const API_URL = "http://localhost:5001/api/";



function getAll() {
  return axios.get(API_URL + "researcher", { headers: authHeader() });
}

const create = (formData) => {
  return axios.post(API_URL + "researcher", formData, {"Content-Type": "multipart/form-data", headers: authHeader()  }
  );
};

const get = id => {
  return axios.get(API_URL + `researcher/${id}` , { headers: authHeader()  });
};

const update = (id, data) => {
  return axios.put(API_URL + `researcher/${id}`,  data ,{ headers: authHeader() });
};

const remove = (id, data) => {
  return axios.delete(API_URL + `researcher/${id}`,  { "Content-Type": "multipart/form-data", headers: authHeader() });
};

const findByTitle = (title) => {
  return axios.get(API_URL + `researcher?title=${title}` , { headers: authHeader() } );
};

function getAllPublic() {
  return axios.get(API_URL + "public_researcher"  );
}

const getPublic = id => {
  return axios.get(API_URL + `public_researcher/${id}`  );
};

const findByTitlePublic = (title) => {
  return axios.get(API_URL + `public_researcher?title=${title}`  );
};




function getAllPublicResearchAssistant() {
  return axios.get(API_URL + "public_research_assistant"  );
}

function getAllPublicResearchHead() {
  return axios.get(API_URL + "public_research_head"  );
}


function getAllPublicResearchFaculty() {
  return axios.get(API_URL + "public_research_faculty"  );
}

const UserService = {
  
  getAll,
  get,
  create,
  update,
  remove,

  findByTitle,

  getAllPublic,
  getPublic,
  findByTitlePublic,


  getAllPublicResearchAssistant,
  getAllPublicResearchHead,
  getAllPublicResearchFaculty

};





export default UserService;
