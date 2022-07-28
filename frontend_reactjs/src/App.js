import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from "./Components/Fetch";
import IFrame from "./Components/IFrame";
import LinkBar from "./Components/LinkBar";
import Tutorial from "./Components/Tutorial";
import Video from "./Components/Video";

function App() {

  return (
    <BrowserRouter>
      <Tutorial />
      <IFrame />
      <Video />
    </BrowserRouter>
  );
}

export default App;
