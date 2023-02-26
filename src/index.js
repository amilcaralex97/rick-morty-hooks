import { createRoot } from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<nav
				className="navbar sticky-top navbar-light
          bg-dark"
			>
				<h1 className="navbar-brand text-light">Rick and Morty</h1>
			</nav>
			<div className="container">
				<List />
			</div>
		</div>
	);
}

const container = document.getElementById('root');
createRoot(container).render(<App />);
