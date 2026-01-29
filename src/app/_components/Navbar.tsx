import Link from "next/link";
import React from "react";
import { getSession } from "../_lib/session";
import LogoutButton from "./LogoutButton";

const Navbar = async() => {
  const session = await getSession(); // replace with real auth session later

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>

        {/* Right side links */}
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800"
              >
                Contacts
              </Link>

              {/* <button onClick= {handleLogout} className="text-red-600 hover:text-red-800"> Logout </button> */}
              <LogoutButton/>

            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
