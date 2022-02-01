import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { MatchPage } from './pages/MatchPage';
import { TeamPage } from './pages/TeamPage';

function App() {
  
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path = '/teams/:teamName' element={<TeamPage/>}/>
          <Route path = '/teams/:teamName/matches/:year' element= {<MatchPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
