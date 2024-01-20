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
import UpdatePipeA from "./Components/Update/Materials/UpdatePipeA";
import UpdateElbowA from "./Components/Update/Materials/Fittings/UpdateElbowA";
import UpdateTeeA from "./Components/Update/Materials/Fittings/UpdateTeeA";
import UpdateStraightTime from "./Components/Update/Labor/UpdateStraightTime";
import UpdateOvertime from "./Components/Update/Labor/UpdateOvertime";
import UpdatePrevailingWage from "./Components/Update/Labor/UpdatePrevailingWage";
import UpdatePipeB from "./Components/Update/Materials/UpdatePipeB";
import UpdateElbowB from "./Components/Update/Materials/Fittings/UpdateElbowB";
import UpdateTeeB from "./Components/Update/Materials/Fittings/UpdateTeeB";

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
            path="/updatePipeA/:id/:detailsId"
            element={<UpdatePipeA />}
          />
          <Route
            exact
            path="/updatePipeB/:id/:detailsId"
            element={<UpdatePipeB />}
          />
          <Route
            exact
            path="/UpdateElbowA/:id/:detailsId"
            element={<UpdateElbowA />}
          />
          <Route
            exact
            path="/updateElbowB/:id/:detailsId"
            element={<UpdateElbowB />}
          />
          <Route
            exact
            path="/updateTeeA/:id/:detailsId"
            element={<UpdateTeeA />}
          />
          <Route
            exact
            path="/updateTeeB/:id/:detailsId"
            element={<UpdateTeeB />}
          />
          <Route
            exact
            path="/UpdateStLabor/:id/"
            element={<UpdateStraightTime />}
          />
          <Route
            exact
            path="/UpdateOtLabor/:id/"
            element={<UpdateOvertime />}
          />
          <Route
            exact
            path="/UpdatePvLabor/:id/"
            element={<UpdatePrevailingWage />}
          />

          <Route exact path="/review" element={<Review />} />
        </Routes>
      </GeneralProvider>
    </BrowserRouter>
  );
}
export default App;
