import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../graphql/__generated__/graphql";

export interface EpisodesState {
  watchLists: Episode[];
  watchingList: Episode[];
  watched: Episode[];
}

const initialState: EpisodesState = {
  watchLists: [],
  watchingList: [],
  watched: [],
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
      } else {
        state.watchLists.push(action.payload);
      }
    },

    removeFromWatchList: (state, action: PayloadAction<string>) => {
      const filterWatchList = state.watchLists.filter(
        (item) => item.id !== action.payload
      );
      state.watchLists = filterWatchList;
    },

    addToWatchingList: (state, action: PayloadAction<Episode>) => {
      const isExist = state.watchingList.find(
        (item) => item.id === action.payload.id
      );
      const watchList = state.watchLists.filter(
        (item) => item.id !== action.payload.id
      );
      if (isExist) {
        state.watchingList;
      } else {
        state.watchingList.push(action.payload);
        state.watchLists = watchList;
      }
    },

    removeFromWatchingList: (state, action: PayloadAction<string>) => {
      const filterWatchingList = state.watchingList.filter(
        (item) => item.id !== action.payload
      );
      state.watchingList = filterWatchingList;
    },

    finishedWatch: (state, action: PayloadAction<Episode>) => {
      const isExist = state.watched.find(
        (item) => item.id === action.payload.id
      );
      const watchingList = state.watchingList.filter(
        (item) => item.id !== action.payload.id
      );
      if (isExist) {
        state.watched;
      } else {
        state.watched.push(action.payload);
        state.watchingList = watchingList;
      }
    },

    removeFromWatchedList: (state, action: PayloadAction<string>) => {
      const filterWatchedList = state.watched.filter(
        (item) => item.id !== action.payload
      );
      state.watched = filterWatchedList;
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  addToWatchingList,
  finishedWatch,
  removeFromWatchedList,
  removeFromWatchingList,
} = watchListSlice.actions;

export default watchListSlice.reducer;
