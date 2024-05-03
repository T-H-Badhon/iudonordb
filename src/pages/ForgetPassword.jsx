import { Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [responseModal, setResponseModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalLoading(true);
    const email = event.target.email.value;

    fetch("https://iudonordbserver.vercel.app/api/auth/forget-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage(
            <>
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                    Recovery Credential sent. Check Mail!
                  </h3>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Link to="/login">
                  <Button gradientMonochrome="lime" className="mx-auto">
                    Go to Login
                  </Button>
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
                    Login Failed!!
                  </h3>
                  <p>{data.errorMessage}</p>
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
    <div className="container mx-auto min-h-screen">
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
        className="flex max-w-md flex-col gap-4 mx-auto mt-5 md:mt-20"
      >
        <h1 className="text-xl text-red-600">
          Enter email to reset your password
        </h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <Button className="w-20" type="submit" color="failure">
          Next
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
