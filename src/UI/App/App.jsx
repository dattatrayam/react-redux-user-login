import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../../helpers';
import { PrivateRoute } from '../../components';
import { SearchPage } from '../SearchPage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {

	render() {
        return (
			<Router history={history}>
				<div>
					<PrivateRoute exact path="/" component={SearchPage} />
					<Route path="/login" component={LoginPage} />
				</div>
			</Router>
            
        );
    }
}

export {  App } ;