import React, { useRef, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import "./Canvas.scss";
import Toolbar from "./Toolbar.js";
import Save from "./Save.js";
// import Direct from './components/direct';
import { Link } from "react-router-dom";
import PencilKidRocket from "./assests/PencilKidRocket.svg";
import ClickMeToGoBack from "./assests/ClickMeToGoBack.png"

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [currentTool, setCurrentTool] = useState("Line");
  const [currentState, setCurrentState] = useState();
  const [previousState, setPreviousState] = useState();
  const [lineSize, setLineSize] = useState(6);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth; // Establish canvas size
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth - 10}px`; // Canvas size styles (matching canvas sizes to inner.width -10px)
    canvas.style.height = `${window.innerHeight - 10}px`;
    canvas.style.border = "1px solid black"; // Create a border around canvas (at least for debugging purposes)

    const context = canvas.getContext("2d");
    context.scale(1, 1); // Create an x, y scale
    context.lineCap = "round"; // Our lines will have rounded endings

    context.lineWidth = 6; // Change these later with a drop-down menu?

    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    savePrevious();
    if (currentTool === "Line") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.strokeStyle = `${currentColor}`; // Set stroke style with current color
      contextRef.current.lineWidth = `${lineSize}`; // Set line width by current state of lineSize
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    } else if (currentTool === "Fill") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.fillStyle = `${currentColor}`; // Set fill style with current color
      contextRef.current.fill();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const drawing = ({ nativeEvent }) => {
    if (!isDrawing) {
      // If not drawing, return
      return;
    }
    if (currentTool === "Line") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY); // Draw line to next coord to continue
      contextRef.current.stroke(); // Color line
    }
  };

  const finishedDrawing = () => {
    if (currentTool === "Line") {
      contextRef.current.closePath(); // Mouse up will lead to the line path finishing
      setIsDrawing(false);
      pushMove();
    } else if (currentTool === "Fill") {
      contextRef.current.closePath();
      setIsDrawing(false);
      pushMove();
    }
  };

  const clearDrawing = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth; // Canvas and context need to be declared locally to clear
    canvas.height = window.innerHeight;
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear rectangle the size of the canvas
    context.lineCap = "round";
    context.strokeStyle = `${currentColor}`;
    setCurrentTool("Line");
  };

  const newColor = (e) => {
    setCurrentColor(e.hex); // Callback function for toolbar to set color
  };

  const defineTool = (e) => {
    setCurrentTool(e.target.value); // Callback function for toolbar to set tool type
  };

  const handleSlider = (e) => {
    setLineSize(e.target.value); // Callback function for toolbar to get and set Line Size
  };

  const pushMove = () => {
    const canvas = canvasRef.current;
    setCurrentState(canvas.toDataURL());
  };

  const savePrevious = () => {
    const canvas = canvasRef.current;
    setPreviousState(canvas.toDataURL());
  };

  const undoMove = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth; // Dimensions needed in order to ensure same size when image remounted
    canvas.height = window.innerHeight;
    let canvasPic = new Image();
    canvasPic.src = previousState;
    canvasPic.onload = function () {
      context.drawImage(canvasPic, 0, 0, canvas.width, canvas.height);
    };
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    canvas.toBlob(function (blob) {
      saveAs(blob, "mypainting.png"); // Saves a blob
    });
  };

  return (
    <div>
      <Toolbar
        clearClick={clearDrawing}
        newColorClick={newColor}
        newToolClick={defineTool} // Callback functions being passed to toolbar
        newThickness={handleSlider}
        undoDraw={undoMove}
      />
      <Save newSave={handleSave} />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishedDrawing} // Event handlers for canvas
        onMouseMove={drawing}
        ref={canvasRef}
        className="drawingTable"
      />
      <div>
        <img
          className="speech-bubble"
          src={ClickMeToGoBack}
          alt="speech bubble"
        ></img>

        <Link to="/landingPage">
          <img id="pencil-sticky" src={PencilKidRocket} alt="pencil"></img>
        </Link>
      </div>
    </div>
  );
};

export default Canvas;
