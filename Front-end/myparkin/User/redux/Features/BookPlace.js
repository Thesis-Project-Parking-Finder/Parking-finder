import { createSlice } from "@reduxjs/toolkit";
export const BookplaceSlice = createSlice({
  name: "bookplace",
  initialState: {
    value: {
      CarType: "",
      ParkingName: "",
      Adress: "",
      Floor: "",
      ParkingSpot: "",
      Date: "",
      Duration: 0,
      User_id: "",
      status: "Ongoing",
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
