import axios from "axios/index"

export const httpService = {
  get({ path, params }) {
    return axios
      .get(path, { params })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  post({ path, data }) {
    return axios
      .post(path, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
  postFormData({ path, data }) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return axios
      .post(path, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
};
