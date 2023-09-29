import axios from '../../utils/axios';

const getRelatedVideos = async (id, tags) => {
	const limit = 5;
	const queryString = tags?.length
		? tags.map((tag) => `tags_like=${tag}`).join('&') +
		  `&id_ne=${id}&_limit=${limit}`
		: `&id_ne=${id}&_limit=${limit}`;

	const response = await axios(`/videos?${queryString}`);

	return response.data;
};

export default getRelatedVideos;
