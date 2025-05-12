import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ProjectsPage from "./pages/ProjectsPage";

import "./styles/components/app.sass";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div id="portfolio">
      <h1>Girlane de Oliveira Costa</h1>
      {isHome && <Sidebar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projetos" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
