import Message from "./Message"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../database/firebase";

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

  useEffect(() => {
    const q = query(collection(db, "messages"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // messages.push(doc.data().name);
      });
    });
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