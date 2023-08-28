import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type1, msg1) => {
    setAlert({
      type: type1,
      msg: msg1
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36, 26, 71)";
      showAlert("success", "Dark mode is set.");

      // setInterval(() => {
      //   document.title = "Text Utils-Dark Mode";
      // },1000);
      // setInterval(() => {
      //   document.title = "Text Utils is Amazing"
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode is set.");
    }
  }


  //Google Search :- React Router Dom Quick Start

  return (
    <>
      {/* <Router> */}
        <Navbar name="Manjil" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <Textform mode={mode} showAlert={showAlert}/>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}/>
          
          <Route exact path="/home" element={<Textform mode={mode} showAlert={showAlert}/>}  />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
