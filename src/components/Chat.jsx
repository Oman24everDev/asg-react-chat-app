import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/firebase";

const Chat = () => {

  const [messages, setMessages] = useState([]);

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
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chat