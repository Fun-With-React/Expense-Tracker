import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guest from "./components/Guest";

import Header from "./components/Header";
import History from "./components/History";

import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
