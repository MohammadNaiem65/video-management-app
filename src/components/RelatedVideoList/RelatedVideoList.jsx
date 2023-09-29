import { useDispatch, useSelector } from 'react-redux';
import RelatedVideo from './RelatedVideo';
import { useEffect } from 'react';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading/Loading';
import Error from '../ui/Error/Error';
import NothingFound from '../ui/NothingFound/NothingFound';

export default function RelatedVideoList({ id, tags }) {
	// Required hooks and variables
	const dispatch = useDispatch();
	const { relatedVideos, isLoading, isError, error } = useSelector(
		(state) => state.relatedVideos
	);

	// ! Fetch related videos
	useEffect(() => {
		dispatch(fetchRelatedVideos({ id, tags }));
	}, [dispatch, id, tags]);

	// ! decide what to render
	let content = null;
	if (isLoading) content = <Loading />;
	if (!isLoading && isError) content = <Error error={error} />;
	if (!isLoading && !isError && !relatedVideos.length)
		content = <NothingFound />;
	if (!isLoading && relatedVideos.length) {
		content = relatedVideos.map((video) => (
			<RelatedVideo key={video.id} video={video} />
		));
	}

	return (
		<div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
			{content}
		</div>
	);
}
