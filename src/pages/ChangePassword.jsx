/* eslint-disable react/no-unescaped-entities */
import { Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const { changePassword } = useContext(AuthContext);
  const [responseModal, setResponseModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentPassword = event.target.currentPassword.value;
    const newPassword = event.target.password2.value;
    const repeatPassword = event.target.repeatPassword.value;

    if (newPassword !== repeatPassword) {
      setMessage(
        <>
          <Modal.Body>
            <div className="text-center">
              <HiXCircle className="mx-auto mb-4 h-14 w-14 text-red-800 dark:text-gray-200" />
              <h3 className="mb-5 text-2xl font-bold text-red-800 dark:text-gray-400">
                Oops!
              </h3>
              <p>
                It seems like the passwords you entered don't match. Please
                double-check and try again.!
              </p>
            </div>
          </Modal.Body>
        </>
      );
      setResponseModal(true);
      return;
    }

    const changePasswordCredential = {
      currentPassword,
      newPassword,
    };

    changePassword(changePasswordCredential).then((response) => {
      if (response.success) {
        setMessage(
          <>
            <Modal.Body>
              <div className="text-center">
                <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                  Password Changed Successfully!!
                </h3>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Link className="mx-auto" to="/">
                <Button gradientMonochrome="lime">Go to Home</Button>
              </Link>
            </Modal.Footer>
          </>
        );
        setLocalLoading(false);
        setResponseModal(true);
        event.target.reset();
      } else {
        setMessage(
          <>
            <Modal.Body>
              <div className="text-center">
                <HiXCircle className="mx-auto mb-4 h-14 w-14 text-red-800 dark:text-gray-200" />
                <h3 className="mb-5 text-2xl font-bold text-red-800 dark:text-gray-400">
                  Password Changed Failed!
                </h3>
                <p>
                  {response.errorMessage
                    ? response.errorMessage
                    : response.message}
                </p>
              </div>
            </Modal.Body>
          </>
        );
        setLocalLoading(false);
        setResponseModal(true);
      }
    });
  };
  return (
    <div className="container mx-auto min-h-screen mt-20">
      {localLoading ? (
        <Modal show={localLoading} size="md" popup>
          <Modal.Body>
            <div className="text-center my-5">
              <Spinner
                className="text-lime-500"
                aria-label="Extra large spinner example"
                size="xl"
              />
            </div>
            <h1 className="text-center text-xl text-lime-500">Processing...</h1>
          </Modal.Body>
        </Modal>
      ) : null}
      <div>
        <Modal
          show={responseModal}
          size="md"
          onClose={() => setResponseModal(false)}
          popup
        >
          <Modal.Header />
          {message}
        </Modal>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="currentPassword" value="Current password" />
          </div>
          <TextInput id="currentPassword" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="New password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeatPassword" value="Repeat password" />
          </div>
          <TextInput id="repeatPassword" type="password" required shadow />
        </div>
        <Button color="failure" type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
