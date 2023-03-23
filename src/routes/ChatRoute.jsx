import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const ChatRoute = ({ children }) => {

  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />
  }

  return children;
}
