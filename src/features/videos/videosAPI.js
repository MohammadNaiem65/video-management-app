import axios from '../../utils/axios';

const getVideos = async () => {
	const res = await axios.get('/videos');

	return res.data;
};

export default getVideos;
