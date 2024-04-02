import { ReactNode, createContext, useContext } from "react";

interface Props {
  onSearch: (text: string) => void;
  children: ReactNode;
}

const SearchContext = createContext<(text: string) => void>(console.log);

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ onSearch, children }: Props) => {
  return (
    <SearchContext.Provider value={onSearch}>{children}</SearchContext.Provider>
  );
};
