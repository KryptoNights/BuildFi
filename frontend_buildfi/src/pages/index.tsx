import React from "react";
import useDetectDevice from "../../customhook/useDetectDevice";
import { useRouter } from "next/router";
import Home from "../../components/Home/Home";

const index = () => {
  const res = useDetectDevice();
  const router = useRouter();

  return (
    <>
      {router.asPath == "/" && (
        <>
          <div className="flex flex-row">
            <Home headerText="Do you need funding for your project or startup?" text="Complete your KYC and list your project to investors." route="kyc"/>
            <Home headerText="Here to invest in some cool projects?" text="Checkout the list of the projects." route="projects"/>
          </div>
        </>
      )}
    </>
  );
};

export default index;
