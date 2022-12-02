import './App.css';
import Header from './Component/header/Header';
import Home from './pages/home/home';
import MovieList from './Component/movieList/movieList';
import MovieDetail from './pages/movieDetail/movie'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path='movie/:id' element={<MovieDetail />} ></Route>
                <Route path='movies/:type' element={<MovieList />}></Route>
                <Route path='/*' element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
