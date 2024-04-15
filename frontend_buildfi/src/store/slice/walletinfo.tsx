import { createSlice,PayloadAction } from "@reduxjs/toolkit";
  
  const initialState = {
    address: "",
    balance: "",
  };

export const walletInfoSlice = createSlice({
  name: "WalletInfo",
  initialState,
  reducers: {
    setWalletInfo(
      state, action
    ) {
      state.address = action.payload.address;
      state.balance =  action.payload.balance;
    },
  
  },
});

export const { setWalletInfo } = walletInfoSlice.actions;

export default walletInfoSlice.reducer;