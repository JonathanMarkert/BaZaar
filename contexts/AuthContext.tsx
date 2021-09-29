import React, { createContext, FC, useState } from "react";
import mockData from "../assets/DummyData/UserData";
// expo secureStore
interface IContextValue {
  isLoggedIn: boolean;
  authLogin: (user: IUser) => void;
}

interface IUser {
  email: string;
  password: string;
}

const TokenProvider: FC = (props) => {
  const [status, setStatus] = useState(false);

  const authLogin = (formData: IUser) => {
    const user = mockData.filter(
      (formData) => formData.email && formData.password
    );
    if (!user) {
      return null;
    }
    setStatus(true);
  };

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
