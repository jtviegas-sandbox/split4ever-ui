
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Parts from './Parts';
import Part from './Part';
import Header from './Header';
import Footer from './Footer';

const App = () =>
	<HashRouter>
		<section className="container-fluid">
			<Header />
			<section className="container">
				<Switch>
					<Route path="/parts/:id" component={Part} />
					<Route path="/parts" component={Parts} />
					<Redirect from="/" to="/parts" /> } />
				</Switch>
			</section>
			<Footer />
		</section>
	</HashRouter>

export default App;


