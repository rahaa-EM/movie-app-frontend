import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Header/NavBar";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Account from "./pages/Account";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
