'use client'
import React from "react"
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.push('/login');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-600 hover:text-red-800 border rounded-md px-3 py-1"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
