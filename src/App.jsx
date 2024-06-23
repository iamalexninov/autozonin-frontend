import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { MenuContextProvider } from "./contexts/MenuContext";
import { VehiclesContextProvider } from "./contexts/VehiclesContext";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <MenuContextProvider>
      <AuthContextProvider>
        <VehiclesContextProvider>
          <Router>
            <Layout />
          </Router>
        </VehiclesContextProvider>
      </AuthContextProvider>
    </MenuContextProvider>
  );
}

export default App;
