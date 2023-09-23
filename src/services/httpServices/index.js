import axios from "axios";
import { notification } from "src/services";

const headers = new Headers();
headers.append("Content-Type", "application/json");

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		notification("An unkown error occurred");
	}

	return Promise.reject(error);
});

export const http = {
	request: (url, data) => axios.request({ method: "POST", headers, url, data }),
};
