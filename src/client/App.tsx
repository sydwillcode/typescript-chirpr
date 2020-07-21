import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Details from './components/Details';
import Admin from './components/Admin';
import Compose from './components/Compose';


const App: React.FC<AppProps> = () => {
 return (
	 <>
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/details/:id" component={Details} />
			<Route exact path="/admin/:id" component={Admin} />
			<Route exact path="/compose" component={Compose} />
		</Switch>
	</Router>
	</>
 )
}

interface AppProps {}

export default App
