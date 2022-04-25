import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import History from "./components/History";


import Home from "./components/Home";


function App() {
  return (
    <>
    <Router>
   <Header/>
   <main className="py-3">
    <Container>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/history" element={<History />} />
    </Routes>
    </Container>
    </main>
    </Router>
    </>
  );
}

export default App;
