import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem("myList");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
const saveToStorage = (items) => {
  try {
    localStorage.setItem("myList", JSON.stringify(items));
  } catch {}
};

const initialState = { items: [] };

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    hydrate(state) {
      state.items = loadFromStorage();
    },
    addToMyList(state, action) {
      const item = action.payload;
      const id = item.id ?? item.src ?? `${item.title}-${item.category}`;
      const exists = state.items.some((it) => (it.id ?? it.src) === id);
      if (!exists) {
        const entry = { ...item, id };
        state.items.push(entry);
        saveToStorage(state.items);
      }
    },
    removeFromMyList(state, action) {
      const id = action.payload;
      state.items = state.items.filter((it) => (it.id ?? it.src) !== id);
      saveToStorage(state.items);
    },
    updateMyListItem(state, action) {
      const { id, patch } = action.payload;
      state.items = state.items.map((it) =>
        (it.id ?? it.src) === id ? { ...it, ...patch } : it
      );
      saveToStorage(state.items);
    },
    clearMyList(state) {
      state.items = [];
      saveToStorage(state.items);
    },
  },
});

export const {
  hydrate,
  addToMyList,
  removeFromMyList,
  updateMyListItem,
  clearMyList,
} = myListSlice.actions;
export default myListSlice.reducer;
