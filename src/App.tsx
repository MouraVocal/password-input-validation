import "./styles.css";
import React, { useState } from "react";
import { PasswordInput } from "./components/PasswordInput";
import { ValidationBox } from "./components/ValidationBox";

export default function App() {
  const [password, setPassword] = useState("");
  return (
    <>
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ValidationBox input={password} />
    </>
  );
}
