import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<h1>Experience</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
