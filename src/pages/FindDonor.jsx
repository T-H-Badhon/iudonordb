import { useState } from "react";
import DonorSearch from "../components/DonorSearch";
import DonorInfoCard from "../components/DonorInfoCard";

const FindDonor = () => {
  const [donors, setDonors] = useState([]);

  const findDonors = (query) => {
    let link = "https://iudonordbserver.vercel.app/api/donors/";
    if (query) {
      link = link + "?" + query;
    }

    fetch(`${link}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDonors(data.data);
      });
  };
  return (
    <div className="container  mx-auto min-h-screen">
      <DonorSearch findDonors={findDonors}></DonorSearch>
      <h1 className="text-2xl font-bold text-red-500 md:mt-20 mt-10 md:mb-10 mb-5 md:mx-20">
        Donors:{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-20">
        {donors.length
          ? donors.map((donor) => (
              <DonorInfoCard donor={donor} key={donor?._id}></DonorInfoCard>
            ))
          : null}
      </div>
      {!donors.length ? (
        <h1 className="text-3xl md:my-20 my-5 text-red-500 text-center">
          No Donors Found!
        </h1>
      ) : null}
    </div>
  );
};

export default FindDonor;
