import axios from "axios";

export default {

  login:  function(userInfo) {
    return axios.post("/api/users/login", userInfo);
  },

  registerUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  }
};
