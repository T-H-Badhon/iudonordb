/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const DonorInfoCard = ({ donor }) => {
  return (
    <Card className="min-w-full">
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
        area: {donor?.area}
      </h5>
    </Card>
  );
};

export default DonorInfoCard;
