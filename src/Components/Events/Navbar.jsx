import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-1 py-1 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <li className="p-1 font-medium">
        <Link to="/" className="text-blue-gray hover:text-red-500 transition-colors">
          Home
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link to="/about" className="text-blue-gray hover:text-red-500 transition-colors">
          About us
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link to="/collaborate" className="text-blue-gray hover:text-red-500 transition-colors">
          Collaborations
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link to="/team" className="text-blue-gray hover:text-red-500 transition-colors">
          Team
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link to="/events" className="text-blue-gray hover:text-red-500 transition-colors">
          Events
        </Link>
      </li>
      <li className="p-1  font-medium px-2  bg-red-500 hover:bg-white transition-colors rounded-lg">
        <a
          href="https://form.jotform.com/240883724309461?fbclid=PAAaY8PzMBntkfnnBHYyvb9hDj0rdr_qI2CzMZ5-wq3xbyClsSFM9zFCd6Xb8"
          className="flex items-center transition-colors  hover:text-red-500 hover:text-lg font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now!
        </a>
      </li>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto  w-full px-6 py-0  bg-black">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-red-500 text-2xl font-bold"
        >
          TEDxDJSCE
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
