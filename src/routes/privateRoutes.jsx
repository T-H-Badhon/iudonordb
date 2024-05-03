import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Modal, Spinner } from "flowbite-react";
import Login from "../pages/Login";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { authorized, loading } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (loading) {
    return (
      <Modal show={loading} size="md" popup>
        <Modal.Body>
          <div className="text-center my-5">
            <Spinner
              className="text-red-500"
              aria-label="Extra large spinner example"
              size="xl"
            />
          </div>
          <h1 className="text-center text-xl text-red-500">Loading..</h1>
        </Modal.Body>
      </Modal>
    );
  }

  if (authorized) {
    return children;
  } else {
    return <Login></Login>;
  }
};

export default PrivateRoutes;
