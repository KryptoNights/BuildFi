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
        <Home/>
      )}
    </>
  );
};

export default index;
