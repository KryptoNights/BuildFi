import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  balance: "",
  network: "",
  chainId: "",
};

export const walletInfoSlice = createSlice({
  name: "WalletInfo",
  initialState,
  reducers: {
    setWalletInfo(state, action) {
      state.address = action.payload.address;
      state.balance = action.payload.balance;
      state.network = action.payload.network;
      state.chainId = action.payload.chainId;
    }
  },
});

export const { setWalletInfo } = walletInfoSlice.actions;

export default walletInfoSlice.reducer;
