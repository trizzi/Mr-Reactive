import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';
import WhatsAppChat from './components/WhatsappChat';

function App() {
	return (
		<>
			<Navbar />
			<Showcase />
			<Reviews />
			<WhatsAppChat />
			<Footer />
		</>
	);
}

export default App;
