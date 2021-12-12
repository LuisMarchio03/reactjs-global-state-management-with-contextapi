import { createContext, useState } from "react";

export const UsuarioContext = createContext({});
UsuarioContext.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [saldo, setSaldo] = useState(0);

  return (
    <UsuarioContext.Provider value={{ name, setName, saldo, setSaldo }}>
      {children}
    </UsuarioContext.Provider>
  );
};
