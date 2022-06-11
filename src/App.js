import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import IndexHome from './features/home'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = '/*' element = {<IndexHome/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
