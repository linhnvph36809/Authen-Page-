import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./i18n";
import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
