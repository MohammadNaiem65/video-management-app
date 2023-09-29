import axios from '../../utils/axios';

const getVideo = async (id) => {
	const res = await axios.get(`/videos/${id}`);

	return res.data;
};

export default getVideo;
