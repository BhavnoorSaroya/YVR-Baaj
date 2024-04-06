import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LiveMonitor from "./pages/LiveMonitor";
import Issue from "./pages/Issue";
import Issues from "./pages/Issues";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="live-monitor" element={<LiveMonitor />} />
      <Route path="issue" element={<Issue />} />
      <Route path="issues" element={<Issues />} />
    </Routes>
  );
}