import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import movie_image from  './images/movie_image.png';
import amazon_image from './images/amazon_image.png';
import tea_landing_page from './images/tea_landing_page.png';




function Projects() {

    const movie_url = 'https://movie-app-5afec.web.app/';

    const e_commerce_url = 'https://challenge-806b4.web.app/';

    const tea_url = 'https://tea-landing-page.web.app/';
    

    return (
			<div className='project-container'>
				<h4>My projects</h4>
				<div className='projects'>
					<div className='my-projects'>
						<img src={movie_image} alt='movieImage' />
						<p>Movies App</p>
						<span>
							A  movie app built with react.js, showcasing reactive
							components, search features and API calls.
						</span>
						<br />
						<Link to={{ pathname: movie_url }} target='_blank'>
							<button>Live</button>
						</Link>

						<button>Repo</button>
					</div>
					<div className='my-projects'>
						<img src={amazon_image} alt='amazonImage' />
						<p>Amazon Clone App</p>
						<span>
							E commerce App built with react.js featuring reactive components,
							API calls, user authentication.
						</span>
						<br />
						<Link to={{ pathname: e_commerce_url }} target='_blank'>
							<button>Live</button>
						</Link>

						<button>Repo</button>
					</div>
					<div className='my-projects'>
						<img src={tea_landing_page} alt='tea_page' />
						<p>TeaShop</p>
						<span>
							A responsive landing page built with react.js, reactive components and react-bootstrap
							features.
						</span>
						<br />
					
						<Link to={{ pathname: tea_url }} target='_blank'>
							<button>Live</button>
						</Link>

						<button>Repo</button>
					</div>

					<div className='my-projects'>project 4</div>
					<div className='my-projects'>project 3cd</div>
				</div>
			</div>
		);
}

export default Projects
