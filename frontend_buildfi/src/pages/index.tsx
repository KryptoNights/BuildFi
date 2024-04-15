import React from "react";
import useDetectDevice from "../../customhook/useDetectDevice";
import { useRouter } from "next/router";

const index = () => {
  const res = useDetectDevice();
  const router = useRouter();

  return (
    <>
      {router.asPath == "/" && (
        <div
          style={{
            backgroundColor: "red",
          }}
          className=""
        >
          hello
        </div>
      )}
    </>
  );
};

export default index;
