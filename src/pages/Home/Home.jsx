import Pagination from '../../components/Pagination/Pagination';
import Tags from '../../components/Tags/Tags';
import Videos from '../../components/Videos/Videos';

export default function Home() {
	return (
		<>
			<Tags />
			<Videos />
			<Pagination />
		</>
	);
}
