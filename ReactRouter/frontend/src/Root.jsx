import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "./components/MainNavigation";
import { useNavigation } from "react-router";
export const Root = () => {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading.....</p>} */}

        <Outlet />
      </main>
    </>
  );
};

export default Root;
