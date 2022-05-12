import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import Guest from "./components/Guest";

import Header from "./components/Header";
import History from "./components/History";

import Home from "./components/Home";

function App() {
  const { serverMessage } = useSelector((state) => state.loginSlice);

  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={serverMessage === "Succesful Login" ? <Home /> : <Guest />} />
            <Route element={<RequireAuth />}>
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
