import { Routes, Route } from 'react-router-dom';
import NavBar from './layout/navigation/NavBar'
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <h1> Ant Design 実験場 </h1>
        <h2> 各ページ </h2>
          <Link to="/layout/navigation/navbar"> 横NavBar  </Link>
      </div>
      <Routes>
          <Route path="/layout/navigation/navbar" element={<NavBar />} />
      </Routes>
    </>
  );
}


export default App;
