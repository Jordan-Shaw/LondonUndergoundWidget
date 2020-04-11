const axios = require("axios");
const baseURL = "https://api.tfl.gov.uk/";

export const getLineStatuses = () => {
  return axios
    .get(`${baseURL}line/mode/tube/status?app_key=`, {
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
