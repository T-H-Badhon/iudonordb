/* eslint-disable react/no-unescaped-entities */

import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const WhyWhoBlock = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Card className="max-w-sm mx-auto">
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              Do you know?
            </h5>
            <p className="font-normal h-44 text-gray-700 dark:text-gray-400">
              Blood cannot be artificially manufactured; only one human can save
              another human's life. However, it's saddening that every year many
              people die due to the urgent shortage of necessary blood.
              Currently, Bangladesh needs only 9 lakh bags of blood every year.
            </p>
            <Link to="/registration">
              <Button color="failure">
                Be Donor Now
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
        <div>
          <Card className="max-w-sm mx-auto">
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              Who can donate blood?
            </h5>
            <p className="font-normal h-44 text-gray-700 dark:text-gray-400">
              Individuals who are generally healthy, at least 16 to 18 years old
              meet the minimum weight requirement, and do not have certain
              health conditions or risky behaviors can donate blood. However,
              specific eligibility criteria can vary by country and
              organization.
            </p>
            <Link to="/whoCanDonate">
              <Button color="failure">
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
        <div>
          <Card className="max-w-sm mx-auto">
            <h5 className="text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              Be aware of Fraud
            </h5>
            <p className="font-normal h-44 text-gray-700 dark:text-gray-400">
              In Bangladesh, as in many other countries, there have been
              instances of fraud in the blood donation system. Fraud in blood
              donation can involve various unethical practices, such as
              falsifying donor information, selling contaminated or expired
              blood, or misusing donated blood for unauthorized purposes.
            </p>
            <Link to="/beAwareOfFraud">
              <Button color="failure">
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhyWhoBlock;
