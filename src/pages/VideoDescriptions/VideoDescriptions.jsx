import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import RelatedVideoList from '../../components/RelatedVideoList/RelatedVideoList';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

export default function VideoDescriptions() {
	return (
		<div>
			<Navbar />

			<section className='pt-6 pb-20'>
				<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
					<div className='grid grid-cols-3 gap-2 lg:gap-8'>
						<div className='col-span-full w-full space-y-8 lg:col-span-2'>
							{/* <!-- video player --> */}
							<VideoPlayer />

							{/* <!-- video description --> */}
							<VideoDescription />
						</div>

						{/* <!-- related videos --> */}
						<RelatedVideoList />
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
