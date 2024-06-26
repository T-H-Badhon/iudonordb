/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Label,
  TextInput,
  Select,
  Modal,
  Spinner,
} from "flowbite-react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";

import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RegistrationForm = () => {
  const { createDonor } = useContext(AuthContext);
  const [responseModal, setResponseModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const bloodGroup = event.target.bloodGroup.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.presentAddress.value;
    const area = event.target.donorArea.value;
    const password = event.target.password2.value;
    const repeatPassword = event.target.repeatPassword.value;
    if (password !== repeatPassword) {
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

    const userDate = {
      password,
      email,
    };
    const donorData = {
      name,
      bloodGroup,
      area,
      address,
      phone,
    };
    setLocalLoading(true);
    createDonor(userDate, donorData).then((response) => {
      if (response.success) {
        setMessage(
          <>
            <Modal.Body>
              <div className="text-center">
                <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                  Registration Completed Successfully!!
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
                  Registration Failed!!
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
    <div>
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
      <div className="container max-w-2xl mx-auto md:h-5/6 md:my-32">
        <div className="flex justify-between mb-5">
          <h1 className=" font-bold text-red-600 text-xl mb-10">
            Register & be Donor , Now
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex max-w-xl mx-auto flex-col gap-4 "
        >
          <div className="md:grid grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Name"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bloodGroup" value="Your Blood Group" />
              </div>
              <div className="">
                <Select id="bloodGroup" required>
                  <option className="text-lg ">Blood Group</option>
                  <option className="text-lg ">A+</option>
                  <option className="text-lg ">B+</option>
                  <option className="text-lg ">O+</option>
                  <option className="text-lg ">AB+</option>
                  <option className="text-lg ">A-</option>
                  <option className="text-lg ">B-</option>
                  <option className="text-lg ">O-</option>
                  <option className="text-lg ">AB-</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-5 gap-5">
            <div className="md:col-span-3">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                shadow
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Contact No." />
              </div>
              <TextInput
                id="phone"
                type="text"
                placeholder="017XXXXXXXX"
                required
                shadow
              />
            </div>
          </div>
          <div className="md:grid grid-cols-5 gap-5">
            <div className="md:col-span-3">
              <div className="mb-2 block">
                <Label htmlFor="presentAddress" value="Present Address" />
              </div>
              <TextInput
                id="presentAddress"
                type="text"
                placeholder="Address"
                required
                shadow
              />
            </div>
            <div className="md:col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="donorArea" value="Prefered Area" />
              </div>
              <div className="">
                <Select id="donorArea" required>
                  <option className="text-lg ">Select Area</option>
                  <option className="text-lg ">Kushtia</option>
                  <option className="text-lg ">Jhinaidah</option>
                  <option className="text-lg ">Sheikhpara</option>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
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
            Register new account
          </Button>
        </form>
        <div className="max-w-xl mx-auto my-5">
          <Link className="flex" to="/login">
            Alreay have account?
            <button className="flex ml-2 font-bold text-green-500">
              Login{" "}
              <ArrowLeftOnRectangleIcon className="ml-2 h-6 w-6"></ArrowLeftOnRectangleIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
