import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import NavigatorBar from './components/NavigationBar';
import About from './components/About';
import Home from './components/Home';
import Store from './components/Store';
import Faq from './components/FAQ';
const Routes = [
    {
        path: '/store',
        component: Store,
        title: 'Store'
    }, {
        path: '/about',
        component: About,
        title: 'About'
    }, {
        path: '/faq',
        component: Faq,
        title: 'F.A.Q.'
    }
]
function App() {
    return (
        <div className="App">
            <Router>
                <NavigatorBar items={Routes}/>

                <Switch>
                    {Routes.map((item) => <Route path={item.path}>
                        <item.component/>
                    </Route>)
}
                    <Route to="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
