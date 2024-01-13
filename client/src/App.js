import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./Screen";
import { GeneralProvider } from "./Components/General/Context/GeneralContext";
import Options from "./Components/Options/Options";
import Materials from "./Components/Material/Materials";
import Labor from "./Components/Labor/Labor";
import Review from "./Components/Review/Review";
import UpdateGeneral from "./Components/Update/UpdateGeneral";
import UpdateBuildingType from "./Components/Update/UpdateBuildingType";
import UpdateSystemType from "./Components/Update/UpdateSystemType";
import UpdateSignage from "./Components/Update/UpdateSignage";
import UpdatePipe from "./Components/Update/UpdatePipe";

function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <Routes>
          <Route exact path="/" element={<Screen />} />
          <Route exact path="/options" element={<Options />} />
          <Route exact path="/materials" element={<Materials />} />
          <Route exact path="/labor" element={<Labor />} />
          <Route exact path="/updateGeneral/:id" element={<UpdateGeneral />} />
          <Route
            exact
            path="/updateBuildingType/:id"
            element={<UpdateBuildingType />}
          />
          <Route
            exact
            path="/updateSystem/:id"
            element={<UpdateSystemType />}
          />
          <Route exact path="/updateSigns/:id" element={<UpdateSignage />} />
          <Route
            exact
            path="/updatePipe/:id/:detailsId"
            element={<UpdatePipe />}
          />

          <Route exact path="/review" element={<Review />} />
        </Routes>
      </GeneralProvider>
    </BrowserRouter>
  );
}
export default App;
