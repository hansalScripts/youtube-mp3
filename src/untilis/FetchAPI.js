import axios from "axios";


export const FetchAPI = async (videoId) => {
    const ENDPOINT = 'https://youtube-mp3-download1.p.rapidapi.com/dl';
    const options = {
        method: 'GET',
        params: { id: videoId },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
            'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
        }
    };

    const response = await axios.get(ENDPOINT, options);

    return response.data;

}
