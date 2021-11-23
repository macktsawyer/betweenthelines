import "./App.scss";
import Canvas from "./Canvas";
// import PencilNoLegs from "./assests/PencilNoLegs.svg";
import LandingPage from "./components/landingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Direct from "./components/direct";

function App() {
  return (
    <div className="App square-grid">
    
      <Router>
        <Direct />
          <Routes>
            <Route path ="/betweenthelines/" element={<LandingPage/>} />
            <Route path="/betweenthelines/landingPage" element={<LandingPage />} />
            <Route path="/betweenthelines/drawingApp" element={<Canvas />} />
            <Route path="/betweenthelines/*" element={<LandingPage />} />
            {/* <LandingPage />
            <Canvas /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
