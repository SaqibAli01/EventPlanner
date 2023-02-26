import { Counter } from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/User/UserLogin";
import UserRegister from "./components/User/UserRegister";
import Home from "./components/Home/Home";
import UserLogout from "./components/User/UserLogout";
import Dashboard from "./components/Dashboard/Dashboard";
import JoinEvent from "./components/JoinEvent/JoinEvent";
import Footer from "./components/footer/Footer";
import AboutEvents from "./components/template/AboutEvents";



function App() {
  return (
    <>
      {/* <h1>Saqib</h1>
    <Counter/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutEvents />} />
          <Route path="/events" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="JoinEvent" element={<JoinEvent />} />
          <Route path="register" element={<UserRegister />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="logout" element={<UserLogout />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
        {/* <Footer /> */}
      {/* <AboutEvents/> */}
      </BrowserRouter>
      {/* <UserRegister/>
      <UserLogin/> */}

    </>
  );
}

export default App;
