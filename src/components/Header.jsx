import './Header.css';

export const Header = ({ message = 'Sin nombre' }) => {
	return (
		<>
			<div className='containerHeader'>
				<header className="Header">
					<h1>
						Where Your New Beginnings Start!
					</h1>
					<div className='separator'></div>
					<p>
						Look for an agency with a proven track record of success buying selling.
					</p>
					<div className='containerButton'>
						<button>
							<a href="#">Our Services</a>
						</button>
					</div>
				</header>
			</div>

		</>
	)
};
