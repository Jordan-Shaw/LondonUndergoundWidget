const axios = require("axios");
const baseURL = "https://api.tfl.gov.uk";

export const getLineStatuses = () => {
  return axios
    .get(`${baseURL}/line/mode/tube/status`, {
      params: {
        app_key: "2c620fbd67b0fe7202e99b15a97419d6",
        app_id: "cdf2be4d",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleLineStatus = (line) => {
  return axios.get(`${baseURL}/Line/${line}/Status`, {
    params: {
      detail: false,
      app_key: "2c620fbd67b0fe7202e99b15a97419d6",
      app_id: "cdf2be4d"
    },
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err)
  });
}