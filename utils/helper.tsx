import axios from "axios";

// Generate a function for making requests to the Sign Protocol Indexing Service
async function makeAttestationRequest(endpoint: string, options: any) {
  const url = `https://testnet-rpc.sign.global/api/${endpoint}`;
  const res = await axios.request({
    url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  });
  // throw API errors
  if (res.status !== 200) {
    throw new Error(JSON.stringify(res));
  }
  // return original response
  return res.data;
}

async function queryAttestations() {
  const response = await makeAttestationRequest("index/attestations", {
    method: "GET",
    params: {
      mode: "onchain", // Data storage location
      schemaId: "onchain_evm_84532_0x34", // Your full schema's ID
      attester: "0x62d70134974e07c574a8Cc76Be8061D196881109", // Alice's address
      indexingValue: "0xED75EeddDc7DFD1451f54Aa57809769c2bF9e393".toLowerCase(), // Bob's address
    },
  });

  // Make sure the request was successfully processed.
  if (!response.success) {
    return {
      success: false,
      message: response?.message ?? "Attestation query failed.",
    };
  }

  // Return a message if no attestations are found.
  if (response.data?.total === 0) {
    return {
      success: false,
      message: "No attestation for this address found.",
    };
  }

  // Return all attestations that match our query.
  return {
    success: true,
    attestations: response.data.rows,
  };
}
