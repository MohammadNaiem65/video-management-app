import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Pagination from '../../components/Pagination/Pagination';
import Tags from '../../components/Tags/Tags';
import Videos from '../../components/Videos/Videos';

export default function Home() {
	return (
		<>
			<Navbar />
			<Tags />
			<Videos />
			<Pagination />
			<Footer />
		</>
	);
}
