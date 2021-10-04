import React, { createContext, FC, useEffect, useState } from "react";
import mockData from "../assets/DummyData/UserData";
import * as SecureStore from "expo-secure-store";
import { ILoginData } from "../Interfaces/ILoginData";

interface IContextValue {
  isLoggedIn: boolean;
  isLoading: boolean | undefined;
  userToken: string | null;
  authLogin: (userFormData: ILoginData) => void;
  signOut: () => void;
}

const TokenProvider: FC = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isWaitingForToken, setIsWaitingForToken] = useState<boolean>();

  async function addToken(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getToken() {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync("token");
      if (!userToken) {
        setToken(null);
      } else {
        setToken(userToken);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const authLogin = async (userFormData: ILoginData) => {
    setIsWaitingForToken(true);

    const acceptedUser = mockData.find(
      (userData) =>
        userData.email === userFormData.email &&
        userData.password === userFormData.password
    );

    if (acceptedUser == null) {
      setLoggedInStatus(false);
      setToken(null);
      setIsWaitingForToken(false);
    } else {
      await addToken("token", acceptedUser.id.toString());
      await getToken();
      setLoggedInStatus(true);
      setTimeout(() => setIsWaitingForToken(false), 2000);
    }
  };

  const signOut = async () => {
    try {
      console.log("trying to delete " + token);
      await SecureStore.deleteItemAsync("token");
    } catch (error) {
      console.log(error);
    }

    if ((await SecureStore.getItemAsync("token")) == null) {
      setToken(null);
      setLoggedInStatus(false);
    }
  };

  useEffect(() => {
    //console.log("token is: " + token);
  }, [token]);

  useEffect(() => {
    //console.log("isloggedin = " + loggedInStatus);
  }, [loggedInStatus]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: loggedInStatus,
        authLogin,
        userToken: token,
        isLoading: isWaitingForToken,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default TokenProvider;
export const AuthContext = createContext<IContextValue>({
  authLogin: () => {},
  isLoggedIn: false,
  userToken: null,
  isLoading: true,
  signOut: () => {},
});
