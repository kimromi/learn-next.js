import { createContext, useContext, useState } from "react";

export type User = {
  id: string;
  name: string;
};

export type IdValue = {
  id: User["id"];
  setId: (id: User["id"]) => void;
};

export type NameValue = {
  name: User["name"];
  setName: (name: User["name"]) => void;
};

export const IdContext = createContext({} as IdValue);
export const NameContext = createContext({} as NameValue);

export const Provider: React.FC = ({ children }) => {
  const [id, setId] = useState<User["id"]>("defaultId");
  const [name, setName] = useState<User["name"]>("defaultName");

  return (
    <IdContext.Provider value={{ id, setId }}>
      <NameContext.Provider value={{ name, setName }}>
        {children}
      </NameContext.Provider>
    </IdContext.Provider>
  );
};

export const useUserId = () => useContext(IdContext);
export const useUserName = () => useContext(NameContext);
