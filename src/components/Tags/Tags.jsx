import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tag from './Tag';
import { fetchTags } from '../../features/tags/tagsSlice';

export default function Tags() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const tags = useSelector((state) => state.tags);

	useEffect(() => {
		dispatch(fetchTags());
	}, [dispatch]);

	return (
		tags.tags.length && (
			<section>
				<div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
					{tags.tags.map((tag) => (
						<Tag key={tag.id} tag={tag.title} />
					))}
				</div>
			</section>
		)
	);
}
