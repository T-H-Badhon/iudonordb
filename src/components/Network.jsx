import {
  UserGroupIcon,
  MapPinIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Network = () => {
  const [donors, setDonors] = useState(0);

  useEffect(() => {
    fetch("https://iudonordbserver.vercel.app/api/donors/count")
      .then((res) => res.json())
      .then((data) => {
        setDonors(data.data);
      });
  }, []);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-xl md:text-4xl text-red-600 font-bold text-center mb-10">
        We are a Network of
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <UserGroupIcon className="text-red-600 h-20 w-20"></UserGroupIcon>
          <h1 className="text-red-600 text-2xl">{donors} users</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MapPinIcon className="text-red-600 h-20 w-20"></MapPinIcon>
          <h1 className="text-red-600 text-2xl">2 Districts</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MagnifyingGlassPlusIcon className="text-red-600 h-20 w-20"></MagnifyingGlassPlusIcon>
          <h1 className="text-red-600 text-2xl">8 Blood Groups</h1>
        </div>
      </div>
    </div>
  );
};

export default Network;
