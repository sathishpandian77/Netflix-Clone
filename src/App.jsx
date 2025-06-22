
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Signup from './component/Signup';
import Login from './component/Login';
import NetflixCashPayment from './component/NetflixCashPayment';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NetflixCashPayment" element={<NetflixCashPayment />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
