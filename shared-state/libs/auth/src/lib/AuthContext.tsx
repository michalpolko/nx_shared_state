import { createContext, useContext, useMemo, useState } from "react";

export interface AuthContext {
  username: string | null;
  setUsername: (username: string) => void;
}

const CtxAuthContext = createContext<AuthContext>(undefined as any);

export const useAuthContext = () => {
  const ctx = useContext(CtxAuthContext);

  if (!ctx) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return ctx;
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);

  const value = useMemo(() => ({ username, setUsername }), [username]);

  return (
    <CtxAuthContext.Provider value={value}>
      {children}
    </CtxAuthContext.Provider>
  );
}
