import { UserAuth } from "../context/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../database/firebase";


const Message = ({ message }) => {

    const { currentUser } = UserAuth();

    console.log(message);

    const handleDelete = async (id) => {
        // console.log(id);
        if (message.uid === currentUser.uid) {
          await deleteDoc(doc(db, 'messages', id))
        } else {
            alert("You don't have permit to delete this message!");
        }
    }

    return (
        <div>
            {/* {message.text} */}
            <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="tooltip tooltip-error tooltip-left mt-2" data-tip="delete?">
                    <button onClick={() => handleDelete(message.id)} className="btn btn-xs bg-white border-none text-black hover:bg-white">. . .</button>
                </div>
                <span>{message.createdAt?.toDate().toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

export default Message