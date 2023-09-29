import { useDispatch, useSelector } from 'react-redux';
import { addTag, removeTag } from '../../features/filter/filterSlice';

export default function Tag({ tag }) {
	// ! Required hooks and variables
	const tags = useSelector((state) => state.filter.tags);
	const dispatch = useDispatch();

	const exists = tags.includes(tag);

	const handleTagSelection = () => {
		if (exists) {
			dispatch(removeTag(tag));
		} else {
			dispatch(addTag(tag));
		}
	};

	return (
		<div
			className={`px-4 py-1 rounded-full cursor-pointer ${
				exists ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
			}`}
			onClick={handleTagSelection}>
			{tag}
		</div>
	);
}
