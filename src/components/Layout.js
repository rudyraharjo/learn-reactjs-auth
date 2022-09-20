import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Partial/Navbar";
import Sidebar from "./Partial/Sidebar";

export default function Layout() {
  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    return () => window.removeEventListener("load", handleLoading);
  }, [location.pathname]);

  return (
    <>
      <div className="flex h-screen font-roboto">
        {/* Sidebar */}
        <Sidebar toggleMenu={() => setIsOpen(!isOpen)} showMenu={isOpen} />
        {/* End Sidebar */}

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Navigation */}
          <Navbar onClick={() => setIsOpen(!isOpen)} />
          {/* End Header Navigation */}

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Transition
              show={!isLoading}
              enter="transition-opacity ease-linear duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Outlet />
            </Transition>
          </main>
          {/* End Main Content */}
        </div>
      </div>
    </>
  );
}
