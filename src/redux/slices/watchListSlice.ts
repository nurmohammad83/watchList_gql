import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../graphql/__generated__/graphql";

export interface EpisodesState {
  watchLists: Episode[];
  alart?: string;
}

const initialState: EpisodesState = {
  watchLists: [],
  alart: "",
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<Episode>) => {
      const isExist = state.watchLists.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.watchLists;
        state.alart = "Already Add to Watch list";
      } else {
        state.watchLists.push(action.payload);
      }
    },
  },
});

export const { addToWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
