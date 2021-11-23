import "./App.scss";
import Canvas from "./Canvas";
// import PencilNoLegs from "./assests/PencilNoLegs.svg";
import LandingPage from "./components/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Direct from "./components/direct";

function App() {
  return (
    <div className="App square-grid">
    
      <Router>
        <Direct />
        <Routes>
          <Route exact path ="/" component={<LandingPage/>} />
          <Route path="/landingPage" component={<LandingPage />} />
          <Route path="/drawingApp" element={<Canvas />} />

          {/* <LandingPage />
          <Canvas /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
