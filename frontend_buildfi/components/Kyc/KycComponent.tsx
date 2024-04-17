import { useState } from "react";
import axios from "axios";

const CodeForm = () => {
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const data = { code };
      const response = await axios.post(
        "https://us-central1-my-project-5269-1684667148053.cloudfunctions.net/buildfi-code-exchange",
        data
      );
      console.log("Response:", response.data);
      // Show success message or redirect user
    } catch (error) {
      console.error("Error submitting code:", error);
      // Show error message to the user
    } finally {
      setSubmitting(false);
    }
  };

  const handleGenerateCode = () => {
    const walletAddr = "0xd6f285aff13129F0e27A2079E343c9AF3b19A776";
    const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=openid%20profile%20email&client_id=876401151866-mhtpl911k9vg6loahfsl5djl7r6kpip0.apps.googleusercontent.com&redirect_uri=https://debjit.dev/redirections&nonce=${walletAddr}`;
    window.open(authorizationUrl, "_blank");
  };

  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>


    <div className="mx-auto mb-28 p-8 bg-white rounded-lg shadow-md " style={{width:'70%'}} >
      <h2 className="text-6xl font-bold mb-8 text-teal-900">
        Start Your Founder's Journey
      </h2>
      <form onSubmit={handleSubmit} className="mb-12">
        <input
          type="text"
          placeholder="Paste Your Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:border-blue-400 text-black"
        />
        <button
          type="submit"
          className="w-full mt-8 px-4 py-4 bg-blue-500 text-white text-2xl rounded-lg focus:outline-none hover:bg-blue-600"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <p className="text-xl text-gray-600 mb-4">
        Don't have a high-security code? Generate one below:
      </p>
      <button
        className="w-full px-4 py-4 bg-blue-500 text-white text-2xl rounded-lg focus:outline-none hover:bg-blue-600"
        onClick={handleGenerateCode}
      >
        Get Your Code
      </button>
    </div>
    </div>
  );
};

export default CodeForm;
