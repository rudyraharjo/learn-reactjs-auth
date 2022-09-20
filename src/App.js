import { Transition } from "@headlessui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Partial/Navbar";
import Sidebar from "./components/Partial/Sidebar";
import MainRoutes from "./Routes";

console.log(process.env.APP_NAME); //printing it to console
console.log(process.env.API_URL);

// const RequiredAuth = ({ isLoggedIn, redirectPath = "/login", children }) => {
//   // console.log(isLoggedIn);
//   if (!isLoggedIn) {
//     return <Navigate to={redirectPath} replace={true} />;
//   }
//   return children ? children : <Outlet />;
// };

// const RequiredPermission = ({
//   isAllowed,
//   redirectPath = "/login",
//   children,
// }) => {
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace={true} />;
//   }
//   return children ? children : <Outlet />;
// };

export default function App() {
  const auth = useSelector((state) => state.auth);
  let [isOpen, setIsOpen] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  const location = useLocation();

  React.useEffect(() => {
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
        {auth._isLoggedIn && (
          <Sidebar toggleMenu={() => setIsOpen(!isOpen)} showMenu={isOpen} />
        )}
        {/* End Sidebar */}

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Navigation */}
          {auth._isLoggedIn && <Navbar onClick={() => setIsOpen(!isOpen)} />}
          {/* End Header Navigation */}

          {/* Main Content */}
          <Transition
            show={!isLoading}
            enter="transition-opacity ease-linear duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <MainRoutes authUser={auth} />
            </main>
          </Transition>
          {/* End Main Content */}
        </div>
      </div>
    </>
  );
}
