import Message from "./Message"

const Chat = () => {

  // for test purposes
  const messages = [
    {
      id: 1,
      message: "Hello there!"
    },
    {
      id: 2,
      message: "Hi,,,"
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