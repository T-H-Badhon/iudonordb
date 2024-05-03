import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto bg-red-100 border border-red-600 p-4 rounded-lg  my-10 md:my-20">
      <div className="mb-10">
        <p>
          Welcome to{" "}
          <Link className="text-red-500 font-bold" to="/">
            IU DonorDB
          </Link>
          , where we believe in the power of generosity and compassion. Our
          mission is to connect donors with those in need, creating a community
          that saves lives through the selfless act of blood donation.
        </p>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-xl mb-2">Who We Are:</h1>
        <p>
          <Link className="text-red-500 font-bold" to="/">
            IU DonorDB
          </Link>{" "}
          is a dedicated platform that brings together donors, recipients, and
          healthcare providers in a united effort to address the constant demand
          for life-saving blood. We understand the critical role that blood
          donation plays in emergency situations, medical treatments, and
          overall healthcare, and we strive to make the donation process
          accessible, transparent, and impactful.
        </p>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-xl mb-2">Our Vision:</h1>
        <p>
          Our vision is simple yet profound a world where no one faces a
          shortage of blood when they need it most. We envision a global network
          of compassionate individuals who recognize the importance of giving
          the gift of life through blood donation. By fostering a sense of
          community and shared responsibility, we aim to contribute to a
          healthier, more resilient society.
        </p>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-xl mb-2">What Sets Us Apart:</h1>
        <p>
          At{" "}
          <Link className="text-red-500 font-bold" to="/">
            IU DonorDB
          </Link>
          , we stand out for our commitment to excellence, transparency, and
          efficiency. We prioritize the safety and well-being of both donors and
          recipients, ensuring that every step of the donation process adheres
          to the highest standards of quality and care. Our user-friendly
          platform is designed to make it easy for donors to contribute,
          recipients to find the support they need, and healthcare providers to
          manage blood resources effectively.
        </p>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-xl mb-2">
          How You Can Make a Difference:
        </h1>
        <p>
          Whether you are a first-time donor or a regular supporter,{" "}
          <Link className="text-red-500 font-bold" to="/">
            IU DonorDB
          </Link>{" "}
          provides a platform for you to make a tangible and life-changing
          impact. Join our growing community of donors, volunteers, and
          healthcare professionals who share a common goal to save lives and
          create a brighter, healthier future.
        </p>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-xl mb-2">Get Involved:</h1>
        <p>
          Ready to be a part of something bigger than yourself? Explore our
          website to learn more about blood donation, find local drives and
          events, and discover how you can contribute to our shared mission.
          Your generosity has the power to transform lives, and together, we can
          make a lasting difference.
        </p>
      </div>
      <div className="mt-10">
        <p>
          Thank you for being a vital part of the{" "}
          <Link className="text-red-500 font-bold" to="/">
            IU DonorDB
          </Link>{" "}
          community. Together, we are the heartbeat that sustains life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
