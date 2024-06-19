import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { MenuContextProvider } from "./contexts/MenuContext";
import { VehiclesContextProvider } from "./contexts/VehiclesContext";

function App() {
  return (
    <MenuContextProvider>
      <VehiclesContextProvider>
        <Router>
          <Layout />
        </Router>
      </VehiclesContextProvider>
    </MenuContextProvider>
  );
}

export default App;
