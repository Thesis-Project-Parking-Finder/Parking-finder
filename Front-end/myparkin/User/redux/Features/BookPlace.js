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
<<<<<<< HEAD
      status: "Ongoing",
=======
      ParkiCoins: 3000,
>>>>>>> f3411a96796abb717dd69e7b0f82fe2f25508432
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
