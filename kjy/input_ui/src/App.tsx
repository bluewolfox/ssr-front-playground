import React, { useRef, useState } from "react";
import FormInput from "./components/FormInput";

export default function App() {
  // const [userName, setUserName] = useState("");
  // const userRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <FormInput
        // userRef={userRef}
        title={"UserName"}
        placeholder="Username"
        // setUserName={setUserName}
        submitName={"submit"}
        type={"text"}
      />
      {/* <FormInput placeholder="UserID" /> */}
      {/* <FormInput placeholder="UserPW" /> */}
      {/* <FormInput placeholder="UserEmail" /> */}
    </div>
  );
}
