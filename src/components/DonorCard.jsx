/* eslint-disable react/prop-types */
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";

const DonorCard = ({ donor }) => {
  const [detailsModal, setDetailsModal] = useState(false);

  const [status, setStatus] = useState(donor?.userId.isBlocked);
  // eslint-disable-next-line no-unused-vars
  const [localLoading, setLocalLoading] = useState(false);

  const changeState = (id) => {
    const updateData = {
      isBlocked: !status,
    };
    setLocalLoading(true);
    fetch(
      `https://iudonordbserver.vercel.app/api/users/${id}/changeBlockState`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("AC_token"),
        },
        body: JSON.stringify({ updateData }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data?.data?.isBlocked);
        setLocalLoading(false);
      });
  };
  return (
    <>
      <Modal show={detailsModal} onClose={() => setDetailsModal(false)}>
        <Modal.Header>
          <h1 className="text-cyan-500"> {donor?.name} </h1>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-2xl  tracking-tight  dark:text-white">
            Blood Group:{" "}
            <span className="font-bold text-red-500">{donor?.bloodGroup}</span>
          </h5>
          <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
            email : {donor?.userId.email}
          </h5>
          <h5 className="text-xl  tracking-tight dark:text-white">
            phone :{" "}
            <span className="font-bold text-red-500">{donor?.phone}</span>
          </h5>
          <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
            address: {donor?.address}
          </h5>
          <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
            Prefered area: {donor?.area}
          </h5>
          <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
            Account Status:{" "}
            {status ? (
              <h1 className="text-lg text-red-500">Blocked</h1>
            ) : (
              <h1 className="text-lg text-lime-500">Active</h1>
            )}
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <div className="">
            <h1>
              {status ? (
                <Button
                  onClick={() => changeState(donor?.userId._id)}
                  color="success"
                >
                  UnBlock
                </Button>
              ) : (
                <Button
                  onClick={() => changeState(donor?.userId._id)}
                  color="failure"
                >
                  Block
                </Button>
              )}
            </h1>
          </div>
        </Modal.Footer>
      </Modal>
      <Card onClick={() => setDetailsModal(true)} className="min-w-full">
        <h5 className="text-2xl  tracking-tight  dark:text-white">
          Blood Group:{" "}
          <span className="font-bold text-red-500">{donor?.bloodGroup}</span>
        </h5>
        <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
          name: {donor?.name}
        </h5>
        <h5 className="text-xl  tracking-tight dark:text-white">
          phone: <span className="font-bold text-red-500">{donor?.phone}</span>
        </h5>
        <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
          address: {donor?.address}
        </h5>
      </Card>
    </>
  );
};

export default DonorCard;
