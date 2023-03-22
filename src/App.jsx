import { Route, Routes } from "react-router-dom";
import Chatbox from "./pages/Chatbox";
import Login from "./pages/Login";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chatbox />} />
      </Routes>
    </div>
  )
}

export default App
