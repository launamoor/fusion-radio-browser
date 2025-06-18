import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/pages/About";
import Genres from "./components/pages/Genres";
import Songs from "./components/pages/Songs";
import SpotifyLogin from "./components/SpotifyLogin";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { RadioBrowserProvider } from "./context/RadioBrowserContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = function () {
    if (isOpen) setIsOpen(false);
    if (!isOpen) setIsOpen(true);
  };

  return (
    <>
      <RadioBrowserProvider>
        <Router>
          <div className="flex">
            <div className="flex-1">
              <Header toggleSidebar={handleToggle} />
              <Main />
            </div>
            <Sidebar
              toggleSidebar={handleToggle}
              className={`fixed top-0 right-0 h-screen ${
                !isOpen ? "sidebar-closed opacity-0 invisible" : ""
              }`}
            >
              <Routes>
                <Route path="/" element={""}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/genres" element={<Genres />}></Route>
                <Route path="/login" element={<SpotifyLogin />}></Route>
                <Route path="/songs" element={<Songs />}></Route>
                <Route path="/saved" element={<Saved />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </Sidebar>
          </div>
        </Router>
      </RadioBrowserProvider>
    </>
  );
}

export default App;
