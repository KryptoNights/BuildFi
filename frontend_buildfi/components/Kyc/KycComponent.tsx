// components/CodeForm.js
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { TextField, Button, Container, ThemeProvider } from "@mui/material";
import styles from "./kyc.module.css";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const CodeForm = () => {
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    try {
      console.log("code:", code);
      const data = { code: code };

      console.log("data:", data);

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const response = await axios.post(
        "https://us-central1-my-project-5269-1684667148053.cloudfunctions.net/buildfi-code-exchange",
        data,
        { headers }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting code:", error);
    }
  };

  const handleGenerateCode = () => {
    // Replace {walletaddr} with the actual wallet address
    const walletAddr = "0xd6f285aff13129F0e27A2079E343c9AF3b19A776";

    // Construct the authorization URL
    const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20profile%20email&client_id=876401151866-mhtpl911k9vg6loahfsl5djl7r6kpip0.apps.googleusercontent.com&redirect_uri=https://debjit.dev/redirections&nonce=${walletAddr}`;

    // Open the authorization URL in a new window
    window.open(authorizationUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.txt2}>Start Your Founders Journey.</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Paste Your Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.inputtext}
        />
        <div className={styles.btn} onClick={handleSubmit}>
          Submit
        </div>
      </form>

      <div className={styles.txt3}>
        Dont Have High Security Code Generate Below :{" "}
      </div>
      <div className={styles.btn2} onClick={handleGenerateCode}>
        Get Your Code
      </div>
    </div>
  );
};

export default CodeForm;
