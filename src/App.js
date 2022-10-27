import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and component
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/singleMovie";
import Tvshow from "./pages/Tvshows";
import SingleTvshow from "./pages/singleTvshow";
import Contactus from "./pages/contactus";
// "proxy": "https://moviewars2.herokuapp.com",


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/api/movies" element={<Movies />} />
          </Routes>
          <Routes>
            <Route path="/api/tvshows" element={<Tvshow />} />
          </Routes>
          <Routes>
            <Route path="/contactus" element={<Contactus />} />
          </Routes>

          <Routes>
            <Route path="/api/movies/:id" element={<SingleMovie />} />
          </Routes>

          <Routes>
            <Route path="/api/tvshows/:id" element={<SingleTvshow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
