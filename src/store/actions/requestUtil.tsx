import axios from 'axios';

const nextTripBaseUrl = 'https://svc.metrotransit.org/nextrip/';

export const sendGetRequest = async (url: string) => {
  try {
    return (await axios.get(nextTripBaseUrl + url)).data;
  } catch (e) {
    return Promise.reject(e);
  }
};
