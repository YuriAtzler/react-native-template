import "@/styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { SignIn } from "@/app/sign-in";

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="auto" />
    </>
  );
}
