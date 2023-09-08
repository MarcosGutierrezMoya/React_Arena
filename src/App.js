import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu.jsx';
import PaxCreation from './pages/PaxCreation';
import StatsContextProvider from './pages/context/statsContext';
import Combat from './pages/Combat';

function App() {
  return (
    <div className="App">
      <StatsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/Creation' element={<PaxCreation />} />
            <Route path='/Combat' element={<Combat />} />
          </Routes>
        </BrowserRouter>
      </StatsContextProvider>
    </div>
  );
}

export default App;
