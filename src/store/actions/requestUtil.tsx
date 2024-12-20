import axios from "axios";

const nextTripBaseUrl = "https://svc.metrotransit.org/nextrip/";

export const sendGetRequest = async (
	url: string,
	token: string | null = null
) => {
	try {
		let headers: any = {};
		if (token) headers["Authorization"] = `Token ${token}`;
		return (await axios.get(nextTripBaseUrl + url, { headers: headers })).data;
	} catch (e) {
		return Promise.reject(e);
	}
};
