import axios from '../../utils/axios';

const getTags = async () => {
	const res = await axios.get('/tags');
	return res.data;
};

export default getTags;
