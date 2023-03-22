import { Navigate } from "react-router-dom";

export const ChatRoute = ({ children }) => {

  const currentUser = false;

  if (!currentUser) {
    return <Navigate to="/" replace={true} />
  }

  return children;
}
