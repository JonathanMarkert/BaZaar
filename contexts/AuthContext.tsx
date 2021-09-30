import React, { createContext, FC, useEffect, useState } from "react";
import mockData from "../assets/DummyData/UserData";
import * as SecureStore from "expo-secure-store";
// expo secureStore
interface IContextValue {
  isLoggedIn: boolean;
  authLogin: (user: any) => void;
}
// kanske behöver type:a till IUser
// export interface IUser {
//   email: string;
//   password: string;
// }

const TokenProvider: FC = (props) => {
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState<string | null>(null);

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

  const authLogin = (user: any) => {
    const acceptedUser = mockData.filter(
      (u) => u.email == user.email && u.password == user.password
    );
    if (!acceptedUser) {
      setStatus(false);
    }
    setStatus(true);
    addToken("token", "30dk4kdflsl3");
  };

  useEffect(() => {
    getToken;
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: status, authLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default TokenProvider;
export const AuthContext = createContext<IContextValue>({
  authLogin: () => {},
  isLoggedIn: false,
});
