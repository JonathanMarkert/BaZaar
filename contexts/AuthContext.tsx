import React, { createContext, FC, useState } from "react";
import mockData from "../assets/DummyData/UserData";
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

  const authLogin = (user: any) => {
    const acceptedUser = mockData.filter(
      (u) => u.email == user.email && u.password == user.password
    );
    if (!acceptedUser) {
      setStatus(false);
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
