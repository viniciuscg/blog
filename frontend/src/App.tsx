import { ThemeProvider } from "styled-components"
import dark from "./themes/dark"
import GlobalStyle from "./global"
import Login from "./Pages/Login"
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <ThemeProvider theme={dark}>  
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
