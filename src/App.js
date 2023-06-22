// Routes
import { BrowserRouter } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;


// Cor principal #6D90DB