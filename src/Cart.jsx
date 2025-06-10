import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";
export default function Cart() {
  const { cart } = useContext(AppContext);
  return <div>{cart.name}</div>;
}