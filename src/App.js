import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//components
import Navbar from './components/NavBar/NavBar';
import Inicio from './components/pages/Inicio';
import Items from './components/pages/Items';
import Burguer from './components/pages/Burguer';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' component={Inicio}/>
          <Route path='/burguer' component={Burguer}/>
          <Route path='/items' component={Items}/> 
      </Switch>
    </Router>
    
    
    
    
    </div>
  );  
}

export default App;
