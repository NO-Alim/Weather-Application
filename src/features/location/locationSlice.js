import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: 22.3419,
  lng: 91.815536,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationSet: (state, action) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export default locationSlice.reducer;
export const { locationSet } = locationSlice.actions;
