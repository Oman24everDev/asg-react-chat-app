import Chat from "../components/Chat"
import Navbar from "../components/Navbar"
import SendMessage from "../components/SendMessage"

const Chatbox = () => {
  return (
    <div>
      <Navbar />
      <Chat />
      <SendMessage />
    </div>
  )
}

export default Chatbox