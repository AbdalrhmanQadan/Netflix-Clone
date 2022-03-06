import Home from "./component/Home";
//import MovieList from "./component/MovieList";
//import Movie from "./component/Movie";
import ModalMovie from "./component/ModalMovie";
import { Routes, Route } from 'react-router-dom';
import Nav from "./component/Navbar";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="model" element={<ModalMovie />} />
      </Routes>
    </>
  );
}

export default App;
