import React from 'react';

export default () => (
  <header className="header">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="header_content d-flex flex-row align-items-center justify-content-start">
						<div className="logo">
							<a href="#">
								<div>The Venue</div>
								<div>restaurant</div>
							</a>
						</div>
						<nav className="main_nav">
							<ul className="d-flex flex-row align-items-center justify-content-start">
								<li><a href="index.html">home</a></li>
								<li><a href="about.html">about us</a></li>
								<li><a href="menu.html">menu</a></li>
								<li><a href="#">delivery</a></li>
								<li><a href="blog.html">blog</a></li>
								<li><a href="contact.html">contact</a></li>
							</ul>
						</nav>
						<div className="reservations_phone ml-auto">Reservations: +34 586 778 8892</div>
					</div>
				</div>
			</div>
		</div>
	</header>
)