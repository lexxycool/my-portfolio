import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import movie_image from  './images/movie_image.png';
import amazon_image from './images/amazon_image.png';
import tea_landing_page from './images/tea_landing_page.png';
import weather_app from './images/react-native-weather-app.png';





function Projects() {

    const movie_url = 'https://movie-app-5afec.web.app/';

    const movie_github = 'https://github.com/lexxycool/movie_app';

	const e_commerce_url = 'https://challenge-806b4.web.app/';
	
	const e_commerce_github = 'https://github.com/lexxycool/amazon-clone';
			
    const tea_url = 'https://tea-landing-page.web.app/';

	const tea_github = 'https://github.com/lexxycool/Responsive_landing_page';
	
	const weather_expo_url = 'https://expo.io/@lexxycool/projects/weather-app-react-native';

	const weather_app_github = 'https://github.com/lexxycool/weather-app-react-native';


			
    

    return (
			<div className='project-container'>
				<h4>My projects</h4>
				<div className='projects' id='project'>
					<div className='project-tile'>
						<img src={movie_image} alt='movieImage' />
						<p>Movies App</p>
						<span>
							A movie app built with react.js, showcasing react components,
							search features and API calls.
						</span>
						<br />
						<Link to={{ pathname: movie_url }} target='_blank'>
							<button>Live</button>
						</Link>
						<Link to={{ pathname: movie_github }} target='_blank'>
							<button>Repo</button>
						</Link>
					</div>
					<div div className = 'project-tile' >
						<img src={amazon_image} alt='amazonImage' />
						<p>Amazon Clone App</p>
						<span>
							E commerce App built with react.js featuring react components,
							API calls, user authentication.
						</span>
						<br />
						<Link to={{ pathname: e_commerce_url }} target='_blank'>
							<button>Live</button>
						</Link>
						<Link to={{ pathname: e_commerce_github }} target='_blank'>
							<button>Repo</button>
						</Link>
					</div>
					<div className = 'project-tile' >
						<img src={tea_landing_page} alt='tea_page' />
						<p>TeaShop</p>
						<span>
							A responsive landing page built with react.js,react components
							and react-bootstrap.
						</span>
						<br />

						<Link to={{ pathname: tea_url }} target='_blank'>
							<button>Live</button>
						</Link>
						<Link to={{ pathname: tea_github }} target='_blank'>
							<button>Repo</button>
						</Link>
					</div>

					<div className = 'project-tile' >
						<img src={weather_app} alt='weather app' />
						<p>Weather App</p>
						<span>
							A React Native App showing weather info of a location, API calls,
							conversion of different temp unit.
						</span>
						<br />

						<Link to={{ pathname: weather_expo_url }} target='_blank'>
							<button>Live</button>
						</Link>
						<Link to={{ pathname: weather_app_github }} target='_blank'>
							<button>Repo</button>
						</Link>
					</div>

				</div>
			</div>
		);
}

export default Projects
