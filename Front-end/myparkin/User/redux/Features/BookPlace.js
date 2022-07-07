import { createSlice } from "@reduxjs/toolkit";

export const BookplaceSlice = createSlice({
  name: "bookplace",
  initialState: {
    value: {
      CarType: "",
      ParkingName: "mohamed",
      Adress: "",
      Floor: "",
      ParkingSpot: "",
      Date: "",
      Duration: 0,
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
