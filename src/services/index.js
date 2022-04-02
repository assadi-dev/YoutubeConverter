import axios from "axios";

export const getAudio = async (id) => {
  const options = {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id: id },
    headers: {
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      "X-RapidAPI-Key": "0e78ff96bfmshf7d4140c747f0f3p1eb5acjsn36789b100bdb",
    },
  };
  const result = await axios.request(options);
  return result;
};

export const download = async (url, title) => {
  let result = await axios.get(url, { responseType: "blob" });

  console.log(result.data);
};
