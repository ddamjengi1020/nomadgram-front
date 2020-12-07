import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./AuthQueries";
import useInput from "Hooks/useInput";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const [action, setAction] = useState("");
  const userName = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const [requestSecret] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });

  const onLogIn = (e) => {
    e.preventDefault();
    if (email.value !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      email={email}
      firstName={firstName}
      onLogIn={onLogIn}
    />
  );
};
