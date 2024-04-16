import React from "react";
import useDetectDevice from "../../customhook/useDetectDevice";
import { useRouter } from "next/router";
import Home from "../../components/Home/Home";
import { styled } from "@mui/material/styles";
import Poster from "public/Poster.webp";
import Image from "next/image";

// const StyledProductImg = styled("img")(({ width, style }) => ({
//   width: width || "25%", // Default width is 25% if width prop is not provided
//   height: "fill",
//   objectFit: "cover",
//   position: "relative",
//   className: style || "",
// }));

const index = () => {
  const res = useDetectDevice();
  const router = useRouter();

  return (
    <>
      <>
        <div className="m-auto max-w-6xl  justify-center align-center">
          <Image height={524} src={Poster} alt={"poster"} width={1124} draggable={false} className="m-auto"/>
          <Home
            headerText="Do you need funding for your project or startup?"
            text="Complete your KYC and list your project to investors."
            route="kyc"
          />
          <Home
            headerText="Here to invest in some cool projects?"
            text="Checkout the list of the projects."
            route="projects"
          />
        </div>
      </>
    </>
  );
};

export default index;
