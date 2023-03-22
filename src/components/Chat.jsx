import Message from "./Message"

const Chat = () => {

  // for test purposes
  const messages = [
    {
      id: 1,
      text: "Hello there!",
      name: "Maria"
    },
    {
      id: 2,
      text: "Hi,,,",
      name: "Joseph"
    }
  ]

  return (
    <div className="containerWrap pb-40 pt-20">
      {messages.map(message => (
        <Message key={message.id} message={message}/>
      ))}
    </div>
  )
}

export default Chat