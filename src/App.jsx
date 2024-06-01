import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

function App() {
  return (
    <MobileMenuContextProvider>
      <Router>
        <Layout />;
      </Router>
    </MobileMenuContextProvider>
  );
}

export default App;
