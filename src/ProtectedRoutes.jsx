import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import GeneralSpinner from "./GeneralSpinner";


export const ProtectedRoute = ({ children }) => {
    const { token, isLoading } = useSelector((state) => state.auth);
   
   
  if (!token) {
    // user is not authenticated
    return <Navigate to="/sign-in" />;
  } else if (isLoading) {
      return <GeneralSpinner/>
  }
  return children;
};
 