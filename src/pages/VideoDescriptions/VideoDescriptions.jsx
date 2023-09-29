import { useDispatch, useSelector } from 'react-redux';
import RelatedVideoList from '../../components/RelatedVideoList/RelatedVideoList';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useEffect } from 'react';
import { fetchVideo } from '../../features/video/videoSlice';
import { useParams } from 'react-router-dom';

export default function VideoDescriptions() {
	// ! Required hooks and variables
	const dispatch = useDispatch();
	const { videoId } = useParams();
	const videoDetails = useSelector((state) => state.video.video);

	const { id, title, description, date, link, likes, unlikes, tags } =
		videoDetails;

	// get video details
	useEffect(() => {
		dispatch(fetchVideo(videoId));
	}, [dispatch, videoId]);

	return (
		<section className='pt-6 pb-20'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				<div className='grid grid-cols-3 gap-2 lg:gap-8'>
					<div className='col-span-full w-full space-y-8 lg:col-span-2'>
						{/* <!-- video player --> */}
						<VideoPlayer link={link} title={title} />

						{/* <!-- video description --> */}
						<VideoDescription
							title={title}
							date={date}
							description={description}
							likes={likes}
							unlikes={unlikes}
						/>
					</div>

					{/* <!-- related videos --> */}
					<RelatedVideoList id={id} tags={tags} />
				</div>
			</div>
		</section>
	);
}
