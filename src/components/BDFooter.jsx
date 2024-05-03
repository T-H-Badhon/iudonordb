import { Footer } from "flowbite-react";
import logo from "../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const BDFooter = () => {
  return (
    <div>
      <Footer container>
        <div className="w-full text-center bg-[#E8E4E4] p-5 rounded-lg text-white ">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
            <Footer.Brand
              className="mr-3 h-9 sm:h-9 text-red-600"
              href="#"
              src={logo}
              alt="Flowbite Logo"
              name="IU DonorDB"
            />
            <Footer.LinkGroup>
              <Link className="text-red-600 m-2" to="/">
                Home
              </Link>
              <Link className="text-red-600 m-2" to="/blogs">
                Community
              </Link>
              <Link className="text-red-600 m-2" to="/aboutUs">
                About
              </Link>
              <Link className="text-red-600 m-2" to="/contact">
                Contact
              </Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="https://www.facebook.com/thbadhons"
            by="MD. Tanvir Hasan, CSE, IU"
            year={2024}
          />
        </div>
      </Footer>
    </div>
  );
};

export default BDFooter;
