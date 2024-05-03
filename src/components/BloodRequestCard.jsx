/* eslint-disable react/prop-types */

import { Button, Card } from "flowbite-react";

const BloodRequestCard = ({ request, ownerShip, deleteRequest, role }) => {
  return (
    <Card className="min-w-full">
      <h5 className="text-2xl  tracking-tight  dark:text-white">
        Blood Group:{" "}
        <span className="font-bold text-red-500">{request.bloodGroup}</span>
      </h5>
      <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
        date: {request.date.split("T")[0]}
      </h5>
      <h5 className="text-lg tracking-tight text-gray-900 dark:text-white">
        Patient: {request.patientName}
      </h5>
      <h5 className="text-xl  tracking-tight dark:text-white">
        phone: <span className="font-bold text-red-500">{request.phone}</span>
      </h5>
      <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white">
        area: {request.area}
      </h5>
      <p className="font-normal  dark:text-gray-400">
        Reason: <span className="font-bold text-red-500">{request.reason}</span>
      </p>
      <div>
        {ownerShip || role == "admin" ? (
          <div>
            <Button
              onClick={() => deleteRequest(request._id)}
              gradientMonochrome="failure"
            >
              Delete
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default BloodRequestCard;
