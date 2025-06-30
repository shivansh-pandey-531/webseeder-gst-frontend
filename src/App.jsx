import { Routes, Route, Link } from "react-router-dom";
import GstDashboard from "./pages/GstDashboard";
import DueDatesAndOthers from "./components/DueDatesAndOthers";


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<GstDashboard />} />
        <Route path="/due-dates" element={<DueDatesAndOthers />} />
      </Routes>
    </>
  )
}


export default App;