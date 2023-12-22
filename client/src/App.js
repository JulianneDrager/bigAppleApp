import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./Screen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
