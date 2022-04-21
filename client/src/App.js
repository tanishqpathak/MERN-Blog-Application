import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Write from "./components/Write";
import Update from "./components/Update";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Context } from "./context/Context";
import { useContext } from "react";


function App() {

  const {user} = useContext(Context)

  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={user ? <Home/> : <Register /> }/>
        <Route path="/login" element={user ? < Home /> : <Login /> }/>
        <Route path="/write" element={user ?  < Write /> : < Register />}/>
        <Route path="/update" element={user ? <Update /> : <Register /> }/>
        <Route path="/blog/:_id" element={ < Blog /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
