import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Chatbox from "./pages/Chatbox";
import Login from "./pages/Login";
import { ChatRoute } from "./routes/ChatRoute";

function App() {

  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App
