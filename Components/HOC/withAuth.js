import { useState } from "react";
import { LOGIN_MUTATION } from "../../Graphql/user";
import { useMutation } from "@apollo/client";

const withAuth = (Page) => {
  return (props) => {
    const [userAuth, setUserAuth] = useState({ username: "", password: "" });

    const [login] = useMutation(LOGIN_MUTATION, {
      variables: {
        password: userAuth.password,
        username: userAuth.username
      },
      onCompleted: ({ login }) => {
        localStorage.setItem("AUTH_TOKEN", login.authToken);
      },
    });

    return <Page {...props} login={login} setUserAuth={setUserAuth} userAuth={userAuth} />;
  };
};

export default withAuth;
