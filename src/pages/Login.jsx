import { Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const [responseModal, setResponseModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email1.value;
    const password = event.target.password1.value;

    const loginCredential = {
      email,
      password,
    };
    setLocalLoading(true);
    logIn(loginCredential).then((response) => {
      if (response.success) {
        setMessage(
          <>
            <Modal.Body>
              <div className="text-center">
                <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                  Login Successfully!!
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
                <HiXCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-gray-200" />
                <h3 className="mb-5 text-2xl font-bold text-red-800 dark:text-gray-400">
                  Login Failed!!
                </h3>
                <p>{response.errorMessage}</p>
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
    <div className="container max-w-md mx-auto h-3/4 md:my-44">
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
      <h1 className="text-center font-bold text-red-600 text-xl mb-10">
        LOGIN
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="flex  mx-auto flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div>
            <Link className="text-red-800" to="/forgetPassword">
              forget password?
            </Link>
          </div>
          <Button color="failure" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
