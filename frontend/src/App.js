import {Route} from 'react-router-dom'
import './App.css';
import AuthPage from './Components/AuthPage';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <Route path="/" component= {AuthPage} exact/>
      <Route path="/home" component={HomePage} />
    </div>
  );
}

export default App;
