import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Modal, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiXCircle } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const SuperAdminRoutes = ({ children }) => {
  const { authorized, loading, role } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <Modal show={loading} size="md" popup>
        <Modal.Body>
          <HiXCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
          <div className="text-center my-5">
            <Spinner
              className="text-red-500"
              aria-label="Extra large spinner example"
              size="xl"
            />
          </div>
          <h1 className="text-center text-xl text-red-500">Loading...</h1>
        </Modal.Body>
      </Modal>
    );
  }

  if (authorized && role == "super-admin") {
    return children;
  }
  if (authorized && role != "super-admin") {
    return (
      <Modal show={role != "super-admin"} size="md" popup>
        <Modal.Body>
          <div className="text-center my-5">
            <h1 className="text-red-500 text-3xl">You are not Authorized!!</h1>
          </div>
        </Modal.Body>
      </Modal>
    );
  } else {
    navigate("/login");
  }
};

export default SuperAdminRoutes;
