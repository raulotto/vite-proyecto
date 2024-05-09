import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
	return (
		<>	
		<div className='container'>
			<Header message="Diego" />

			<Articles messageAr="sitio" />
		</div>	

		</>
	);
};
