import React from "react";

const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "20rem",
          padding: "1rem",
          backgroundColor: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: ".375rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <form style={{ marginBottom: "1.5rem" }} action="#">
          <h5
            style={{ fontSize: "1.25rem", fontWeight: "500", color: "#374151" }}
          >
            Sign in to our platform
          </h5>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                marginBottom: ".5rem",
                fontSize: ".875rem",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              style={{
                backgroundColor: "#edf2f7",
                borderColor: "#e2e8f0",
                color: "#374151",
                fontSize: ".875rem",
                borderRadius: ".375rem",
                padding: ".625rem .9375rem",
                width: "100%",
                boxShadow: "0 0 0 2px transparent",
              }}
              placeholder="name@company.com"
              required
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="password"
              style={{
                marginBottom: ".5rem",
                fontSize: ".875rem",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              style={{
                backgroundColor: "#edf2f7",
                borderColor: "#e2e8f0",
                color: "#374151",
                fontSize: ".875rem",
                borderRadius: ".375rem",
                padding: ".625rem .9375rem",
                width: "100%",
                boxShadow: "0 0 0 2px transparent",
              }}
              required
            />
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                id="remember"
                type="checkbox"
                value=""
                style={{
                  width: "1rem",
                  height: "1rem",
                  borderColor: "#cbd5e0",
                  borderRadius: ".25rem",
                  backgroundColor: "#edf2f7",
                  boxShadow: "0 0 0 1px transparent",
                }}
                required
              />
            </div>
            <label
              htmlFor="remember"
              style={{
                marginLeft: ".5rem",
                fontSize: ".875rem",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Remember me
            </label>
            <a
              href="#"
              style={{
                marginLeft: "auto",
                fontSize: ".875rem",
                color: "#3b82f6",
                textDecoration: "none",
              }}
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontSize: ".875rem",
              fontWeight: "500",
              borderRadius: ".375rem",
              padding: ".625rem 1.25rem",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Login to your account
          </button>
          <div
            style={{
              fontSize: ".875rem",
              fontWeight: "500",
              color: "#6b7280",
              marginTop: ".5rem",
            }}
          >
            Not registered?{" "}
            <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
