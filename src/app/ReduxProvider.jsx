"use client";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { store } from "@/store";
import { hydrate } from "@/store/myListSlice";

function Initializer({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrate());
  }, [dispatch]);
  return children;
}

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Initializer>{children}</Initializer>
    </Provider>
  );
};

export default ReduxProvider;
