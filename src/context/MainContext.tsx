import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MainContextType = {
  isClickCategory: boolean;
  setIsClickCategory: Dispatch<SetStateAction<boolean>>;
};

export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [isClickCategory, setIsClickCategory] = useState<boolean>(false);
  return (
    <MainContext.Provider value={{ isClickCategory, setIsClickCategory }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
