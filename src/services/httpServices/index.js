import axios from "axios";

const headers = new Headers();
headers.append("Content-Type", "application/json");

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		console.error(error);
	}

	return Promise.reject(error);
});

export const http = {
	request: ({ url, data }) =>
		axios.request({ method: "POST", headers, url, data }),
};
