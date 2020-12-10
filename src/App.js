import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import RedirectToHome from './components/RedirectToHome/RedirectToHome';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Events from './containers/Events/Events';
import AddEvent from './containers/AddEvent/AddEvent';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Route exact path='/' component={RedirectToHome}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/events' component={Events}/>
            <Route path='/addEvent' component={AddEvent}/>
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;
