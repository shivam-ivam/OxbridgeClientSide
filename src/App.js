import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import ReportForm from "./Components/ReportForm";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/reportform" element={<ReportForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
