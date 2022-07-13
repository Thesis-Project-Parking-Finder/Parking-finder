import { createSlice } from "@reduxjs/toolkit";
export const BookplaceSlice = createSlice({
  name: "bookplace",
  initialState: {
    value: {
      CarType: "",
      ParkingName: "",
      Adress: "",
      ParkingSpot: "",
      Date: "",

      Duration: 0,
      arrivalTime: 0,
      exitTime: 0,
      ParkiCoins: 1000,
      status: "Ongoing",
      User_id: "",
      User_fullName: "",

    },
  },
  reducers: {
    ParkingNameAndAdress: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { ParkingNameAndAdress } = BookplaceSlice.actions;
export default BookplaceSlice.reducer;
