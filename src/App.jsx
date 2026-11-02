import { Routes, Route } from "react-router";
import LandingPage from "./landingPage.jsx";
import Layout from "./Layout.jsx";
import Teams from "./Teams.jsx";
import News from "./News.jsx";
import Contact from "./Contact.jsx";
import Shop from "./Shop.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";


function App() {


  return (
    <div>
      <Routes>
          <Route element = {<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
     
    </div>
  );
} 

export default App;
