import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  searchResources,
} from "../utils/searchUtils";

const SearchContext = createContext();

export function SearchProvider({ children }) {

  const [keyword, setKeyword] = useState("");

  /*
  ==========================================
  Hasil pencarian global
  ==========================================
  */

  const results = useMemo(() => {

    return searchResources(keyword);

  }, [keyword]);

  /*
  ==========================================
  Clear Search
  ==========================================
  */

  const clearSearch = () => {

    setKeyword("");

  };

  /*
  ==========================================
  Provider
  ==========================================
  */

  return (

    <SearchContext.Provider
      value={{

        keyword,

        setKeyword,

        results,

        clearSearch,

      }}
    >

      {children}

    </SearchContext.Provider>

  );

}

export function useSearch() {

  return useContext(SearchContext);

}