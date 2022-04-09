import './App.css'
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClientInfo from './ClientInfo';
import FullInfo from './FullInfo';
import LastInfo from './LastInfo';
import DownloadPage from './DownloadPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<ClientInfo />} />
          <Route path='/fullinfo' element={<FullInfo />} />
          <Route path='/fullinfo/:id' element={<FullInfo />} />
          <Route path='/lastinfo' element={<LastInfo />} />
          <Route path='/downloadpage' element={<DownloadPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
