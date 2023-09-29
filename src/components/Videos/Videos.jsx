import { useDispatch, useSelector } from 'react-redux';
import Video from './Video';
import { useEffect } from 'react';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading/Loading';

export default function Videos() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { videos, isLoading, isError } = useSelector(
		(state) => state.videos
	);

	let content;
	if (isLoading) content = <Loading />;
	if (!isLoading && videos)
		content = videos.map((video) => <Video key={video.id} video={video} />);
	if (!isLoading && videos.length === 0)
		content = (
			<h1 className='text-center text-xl font-bold'>Nothing found.</h1>
		);
	if (!isLoading && isError)
		content = <div className='col-span-12'>Some error happened.</div>;

	useEffect(() => {
		dispatch(fetchVideos());
	}, []);

	return (
		<section className='pt-12'>
			<section className='pt-12'>
				<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
					{/* <!-- single video --> */}
					{content}

					{/* <!-- error section */}
					{/* <div className='col-span-12'>some error happened</div> */}
				</div>
			</section>
		</section>
	);
}
