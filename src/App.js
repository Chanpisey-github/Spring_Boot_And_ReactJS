import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { MatchPage } from './pages/MatchPage';
import { TeamPage } from './pages/TeamPage';

function App() {
  
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path = '/teams/:teamName' element={<TeamPage/>}/>
          <Route path = '/teams/:teamName/matches/:year' element= {<MatchPage/>} />
          <Route path = '/teams' element = {<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
