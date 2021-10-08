import * as SecureStore from "expo-secure-store";
import React, { createContext, FC, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import mockData from "../assets/DummyData/UserData";
import { ILoginData } from "../Interfaces/ILoginData";
import { IUser } from "../Interfaces/IUser";
interface IContextValue {
  isLoggedIn: boolean;
  isLoading: boolean | undefined;
  userToken: string | null;
  authLogin: (userFormData: ILoginData) => void;
  signOut: () => void;
  user: IUser;
}

const defaultUser: IUser = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  street: "",
  city: "",
  postalCode: 0,
  country: "",
  latitude: 0,
  longitude: 0,
};

let currentToken = "";

const TokenProvider: FC = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isWaitingForToken, setIsWaitingForToken] = useState<boolean>();
  const [userState, setUserState] = useState<IUser>(defaultUser);

  async function addToken(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getToken(currentToken: string) {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync(currentToken);
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
      currentToken = uuid.v4().toString();
      await addToken(currentToken, acceptedUser.id.toString());
      await getToken(currentToken);
      setLoggedInStatus(true);
      setTimeout(() => setIsWaitingForToken(false), 2000);
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync(currentToken);
    } catch (error) {
      console.log(error);
    }

    if ((await SecureStore.getItemAsync(currentToken)) == null) {
      setToken(null);
      setLoggedInStatus(false);
    }
  };

  const getUser = async () => {
    const existingUser = mockData.find((u) => u.id === token);
    if (!existingUser) throw new Error("Missing user...");
    setUserState(existingUser);
  };

  useEffect(() => {
    if (token != null) {
      getUser();
    }
  }, [token]);

  useEffect(() => {}, [loggedInStatus]);

  useEffect(() => {}, [userState]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: loggedInStatus,
        authLogin,
        userToken: token,
        isLoading: isWaitingForToken,
        signOut,
        user: userState,
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
  user: defaultUser,
});
