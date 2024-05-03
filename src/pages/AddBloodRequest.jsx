import {
  Button,
  Label,
  TextInput,
  Select,
  Datepicker,
  Modal,
  Spinner,
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineBadgeCheck, HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const AddBloodRequest = () => {
  const [responseModal, setResponseModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [localLoading, setLocalLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bloodGroup = event.target.bloodGroup.value;
    const area = event.target.requestArea.value;
    const patientName = event.target.name.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const reason = event.target.reason.value;

    const requestData = {
      bloodGroup,
      patientName,
      phone,
      area,
      reason,
      date,
    };
    setLocalLoading(true);
    fetch(
      "https://iudonordbserver.vercel.app/api/blood-requests/create-request",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("AC_token"),
        },
        body: JSON.stringify({ requestData }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setMessage(
            <>
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineBadgeCheck className="mx-auto mb-4 h-14 w-14 text-lime-600 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-lime-600 dark:text-gray-400">
                    Your Request Posted Successfully!
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
                    Failed to Post Your Request!!
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
      <div className="container mx-auto md:h-5/6 md:my-36">
        <h1 className="text-center font-bold text-red-600 text-xl mb-10">
          Add Blood Request
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex mx-auto  max-w-md flex-col gap-4"
        >
          <div className="md:grid grid-cols-2 gap-5">
            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="bloodGroup" value="Blood Group" />
              </div>
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
            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="requestArea" value="Area" />
              </div>
              <Select id="requestArea" required>
                <option className="text-lg ">Select Area</option>
                <option className="text-lg ">Kushtia</option>
                <option className="text-lg ">Jhinaidah</option>
                <option className="text-lg ">Sheikhpara</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Patient name" />
            </div>
            <TextInput id="name" type="text" />
          </div>
          <div className="md:grid grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Contact No." />
              </div>
              <TextInput id="phone" type="text" placeholder="017XXXXXXXX" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <Datepicker id="date" />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="reason" value="Reason" />
            </div>
            <TextInput
              id="reason"
              type="text"
              placeholder="Why you need Blood?"
            />
          </div>
          <Button color="failure" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBloodRequest;
