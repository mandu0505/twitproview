import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timeline from "./routes/Timeline";
import Trends from "./routes/Trends";

function Routers() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/trends" element={<Trends />} />
      </Routes>
    </Router>
  );
}
export default Routers;
