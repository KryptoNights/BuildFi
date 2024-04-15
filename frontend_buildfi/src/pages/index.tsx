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
            maxWidth: "20rem",
            backgroundColor: "#ffffff",
            border: "1px solid #d1d5db",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            dark: { backgroundColor: "#374151", borderColor: "#4b5563" },
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              style={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div style={{ padding: "1.25rem" }}>
            <a href="#" style={{ textDecoration: "none" }}>
              <h5
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  color: "#374151",
                  dark: { color: "#ffffff" },
                }}
              >
                Do you need funding for your project or startup
              </h5>
            </a>
            <p
              style={{
                marginBottom: "0.75rem",
                fontSize: "1rem",
                color: "#4b5563",
                dark: { color: "#cbd5e0" },
              }}
            >
              Complete your KYC and list your project to investors.
            </p>
            <a
              href="/kyc"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: ".375rem .75rem",
                fontSize: ".875rem",
                fontWeight: "500",
                textAlign: "center",
                color: "#ffffff",
                backgroundColor: "#3b82f6",
                borderRadius: ".375rem",
                dark: { backgroundColor: "#2563eb" },
              }}
            >
              Yes please
              <svg
                style={{
                  width: "0.875rem",
                  height: "0.875rem",
                  marginLeft: ".25rem",
                }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
// Complete your KYC and list your project to investorsDo you need funding for your project or startup
