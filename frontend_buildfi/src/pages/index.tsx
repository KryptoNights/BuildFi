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
      <div
        className="max-w-6xl "
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "16vh",
        }}
      >
        {/* <Image height={524} src={Poster} alt={"poster"} width={1124} draggable={false} className="m-auto"/> */}
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="heading-hero gradient-1"
            style={{
              zIndex: 1,
              textAlign: "center",
              whiteSpace: "normal",
              WebkitTextFillColor: "transparent",
              backgroundColor: "#fafafa",
              backgroundImage: "linear-gradient(135deg, #fff 38%, #828282)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 0,
              fontSize: "2em",
              fontWeight: 700,
              lineHeight: "120%",
              position: "relative",
              width: "572px",
              height: "74px",
              margin: "20px 0px",
            }}
          >
            Looking for Funding or looking for startups to invest?
          </div>
          <p
            className="text-description-18px"
            style={{
              color: "#828282",
              maxWidth: "56ch",
              fontSize: "1.125em",
              fontWeight: 300,
              lineHeight: "1.5em",
              padding: "0px 4px",
            }}
          >
            You can invest on startups as well as list your startup/project for
            funding.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            className="div-btn-2 hover:bg-red-500"
            style={{
              color: "#fff",
              backgroundColor: "#171719",
              border: "1px solid #ab00ff",
              borderRadius: "1000px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "max-content",
              marginTop: 0,
              padding: "12px 24px",
              lineHeight: 1.5,
              display: "inline-block",
            }}
            href="/kyc"
          >
            Developer
          </a>
          <a
            className="div-btn"
            style={{
              border: "1px solid #000",
              borderRadius: "1000px",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "max-content",
              marginTop: 0,
              marginLeft: "15px",
              padding: "12px 24px",
              lineHeight: 1.5,
              display: "inline-block",
              color: "#000",
              backgroundColor: "#fff",
            }}
            href="/projects"
          >
            Investor
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
