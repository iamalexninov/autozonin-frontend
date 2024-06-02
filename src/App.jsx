import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <Router>
        <Layout />
      </Router>
    </MenuContextProvider>
  );
}

export default App;
