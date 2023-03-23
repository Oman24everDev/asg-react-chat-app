import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../database/firebase";

const Chat = () => {

  const messageEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  // for test purposes
  // const messages = [
  //   {
  //     id: 1,
  //     text: "Hello there!",
  //     name: "Maria"
  //   },
  //   {
  //     id: 2,
  //     text: "Hi,,,",
  //     name: "Joseph"
  //   }
  // ]

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
      );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        messages.push({...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="containerWrap pb-40 pt-20">
       <p className="font-bold text-2xl text-center">Welcome! This is the start of history chat! 💬</p>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  )
}

export default Chat