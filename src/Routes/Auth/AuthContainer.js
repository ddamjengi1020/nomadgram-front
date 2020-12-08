import { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  CONFIRM_SECRET,
  CREATE_ACCOUNT,
  LOCAL_LOG_IN,
  LOG_IN,
} from "./AuthQueries";
import useInput from "Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);
  const userName = useInput("");
  const email = useInput("silluat11@gmail.com");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: secret.value,
      email: email.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onLogIn = async (e) => {
    e.preventDefault();
    if (email.value !== "") {
      try {
        const {
          data: { requestSecret },
        } = await requestSecretMutation();
        if (!requestSecret) {
          toast.error("Can't request secret, Try again");
        } else {
          toast.success("Confirm Secret in your Email");
          setTimeout(() => setIsConfirm(true), 3000);
        }
      } catch (e) {
        toast.error(e.message);
        setTimeout(() => setAction("logIn"), 3000);
      }
    } else {
      toast.warning("Email is required");
    }
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (
      userName.value !== "" &&
      email.value !== "" &&
      firstName.value !== "" &&
      lastName.value !== ""
    ) {
      try {
        const {
          data: { createAccount },
        } = await createAccountMutation();
        if (!createAccount) {
          toast.error("Can't create Account, Try again");
        } else {
          toast.success("Created Account, Now Log In");
          setTimeout(() => setAction("signUp"), 3000);
        }
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.warning("Each field is required");
    }
  };

  const onConfirmSecret = async (e) => {
    e.preventDefault();
    if (secret.value !== "") {
      try {
        const {
          data: { confirmSecret: token },
        } = await confirmSecretMutation();
        if (!token) {
          toast.error("Can't get token from your account, Try again");
        } else {
          toast.success("Log In!, have a good time with Nomadgram");
          localLogInMutation({ variables: { token } });
        }
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      email={email}
      firstName={firstName}
      lastName={lastName}
      isConfirm={isConfirm}
      secret={secret}
      onLogIn={onLogIn}
      onSignUp={onSignUp}
      onConfirmSecret={onConfirmSecret}
    />
  );
};
