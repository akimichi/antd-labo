import { Routes, Route } from 'react-router-dom';
import NavBar from './layout/navigation/NavBar'


function App() {
  return (
    <>
      <div>
        Ant Design 実験場
      </div>
      <Routes>
          <Route path="/navigation/NavBar" element={<NavBar />} />
      </Routes>
    </>
  );
}


export default App;
