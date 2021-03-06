import React, {Component, lazy, Suspense} from 'react';
import Header from './components/header';
import Page404 from './pages/404.page';
import {Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import SecureRoute from './components/secure_route';

const IndexPage = lazy(() => import('./pages/index.page'));
const MoviesPage = lazy(() => import('./pages/movies.page'));
const MoviePage = lazy(() => import('./pages/movie.page'));
const SchedulePage = lazy(() => import('./pages/schedule.page'));
const ComingSoonPage = lazy(() => import('./pages/coming.page'));
const LoginPage = lazy(() => import('./pages/login.page'));
const AccountPage = lazy(() => import('./pages/account.page'));

class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<Container id='body'>
					<Suspense fallback={<div>LOADING</div>}>
						<Switch>
							<Route exact path='/'
								   component={IndexPage}
							/>
							<Route path='/movies' exact
								   component={MoviesPage}/>
							<Route path='/movies/:id'
								   component={MoviePage}/>
							<Route path='/schedule'
								   component={SchedulePage}/>
							<Route path='/soon'
								   component={ComingSoonPage}/>
							<Route path='/login'
								   component={LoginPage}/>
							<SecureRoute path='/account' component={AccountPage}/>
							<Route component={Page404}/>
						</Switch>
					</Suspense>
				</Container>
				
				
				<section>
					{/*<svg viewBox='0 0 100 200'>*/}
					{/*	<g>*/}
					{/*		<rect width={15} height={15} x={50} y={50} rx={3} ry={3}>*/}
					{/*			<text x={20} y={35}>1</text>*/}
					{/*		</rect>*/}
					{/*	*/}
					{/*	</g>*/}
					{/*	*/}
					{/*</svg>*/}
				</section>
			
			</>
		);
	}
}

export default App;
