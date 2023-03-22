import { Route, Routes } from "react-router-dom";
import Chatbox from "./pages/Chatbox";
import Login from "./pages/Login";
import { ChatRoute } from "./routes/ChatRoute";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
        path="/chat" 
        element={
          <ChatRoute>
            <Chatbox />
          </ChatRoute>
        }
       />
      </Routes>
    </div>
  )
}

export default App
