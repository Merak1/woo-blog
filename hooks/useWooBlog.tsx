// import { loadProducts } from "@/app/libs/loadProducts";
import { Search } from "@/app/utils/Search";
import { pageSize } from "@/app/utils/constants";
import { Paginate } from "@/app/utils/paginate";
import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type BlogContextType = {
  entries: any;
  currentPage: number;
  paginatedEntries: any;
  searchQuery: string;
  searchByType: string;
  noResultsFound: boolean;
  entrySearchResult: any;
  handlePageChange: (page: number) => void;
  handleEntrySearch: (data: SearchDataType) => void;
  handleRefreshEntries: () => void;
};

interface SearchDataType {
  searchBy: string;
  query: string;
}

export const BlogContext = createContext<BlogContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const BlogContextProvider = (props: Props) => {
  const [entries, setEntries] = useState();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedEntries, setpaginatedEntries] = useState();
  const [entrySearchResult, setEntrySearchResult] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchByType, setSearchByType] = useState<string>("");
  const [noResultsFound, setnoResultsFound] = useState<boolean>(false);

  useEffect(() => {
    // if (typeof window !== "undefined" && window.localStorage) {
    // }
    // set entries in initial load

    loadProducts();
  }, []);

  useEffect(() => {
    if (entrySearchResult && entrySearchResult.length <= 0) {
      setnoResultsFound(true);
    }
  }, [entrySearchResult]);

  useEffect(() => {
    if (entries) {
      PaginateResults(entries);
    }
  }, [entries]);

  useEffect(() => {
    if (entries) {
      PaginateResults(entries);
    }
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const SearchedData = Search(entries, searchQuery, searchByType);
      setEntrySearchResult(SearchedData);

      PaginateResults(SearchedData);
    } else if (
      searchQuery.length === 0 &&
      entrySearchResult &&
      entrySearchResult.length === 0
    ) {
      if (entries) {
        PaginateResults(entries);
      }
    }
  }, [searchQuery, searchByType]);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/blog");
      setEntries(data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const PaginateResults = (entriesToDisplay: any) => {
    const result = Paginate(entriesToDisplay, currentPage, pageSize);
    setpaginatedEntries(result);
  };

  const handleRefreshEntries = useCallback(() => {
    setnoResultsFound(false);
    loadProducts();
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  const handleEntrySearch = useCallback(
    (data: SearchDataType) => {
      const { query, searchBy } = data;
      setSearchByType(searchBy);
      setSearchQuery(query);
    },
    [entries]
  );

  const value = {
    entries,
    currentPage,
    handlePageChange,
    paginatedEntries,
    handleEntrySearch,
    searchQuery,
    searchByType,
    entrySearchResult,
    noResultsFound,
    handleRefreshEntries,
  };

  return <BlogContext.Provider value={value} {...props} />;
};

export const useWooBlog = () => {
  const context = useContext(BlogContext);
  if (context === null) {
    throw new Error("useWooBlog must be used within a BlogContext");
  }

  return context;
};