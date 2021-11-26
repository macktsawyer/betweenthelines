import "./App.scss";
import Canvas from "./Canvas";
// import PencilNoLegs from "./assests/PencilNoLegs.svg";
import LandingPage from "./components/landingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Direct from "./components/direct";

function App() {
  return (
    <div className="App square-grid">
    
      <Router>
        {/* <Direct /> */}
          <Routes>
            <Route path ="/" exact element={<LandingPage/>} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/drawingApp" element={<Canvas />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
