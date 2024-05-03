import { Card } from "flowbite-react";
import profilePhoto from "../assets/developerPhoto.jpg";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="h-3/4 flex justify-center items-center">
        <Card className="max-w-sm " imgSrc={profilePhoto} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Md. Tanvir Hasan
          </h5>
          <h5 className=" tracking-tight text-gray-900 dark:text-white">
            Dept. of CSE <br />
            Islamic University <br />
            Kushtia,Bangladesh.
          </h5>

          <div>
            <div className="flex justify-start items-center">
              <EnvelopeIcon className="w-5 h-5"></EnvelopeIcon>
              thbadhons@gmail.com{" "}
            </div>
            <div className="flex justify-start items-center">
              <PhoneIcon className="w-5 h-5"></PhoneIcon>+8801795687025
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
