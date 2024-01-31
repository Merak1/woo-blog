import { EntryProps } from "@/app/types/entryType";
import { Search } from "@/app/utils/Search";
import { pageSize } from "@/app/utils/constants";
import { loadProducts } from "@/app/utils/loadProducts";
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
  totalPages: number;
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
  const [totalPages, setTotalPages] = useState<number>(1);

  const [noResultsFound, setnoResultsFound] = useState<boolean>(false);

  useEffect(() => {
    // if (typeof window !== "undefined" && window.localStorage) {
    // }
    // set entries in initial load

    loadAndSetProducts();
  }, []);

  useEffect(() => {
    if (entrySearchResult && entrySearchResult.length <= 0) {
      setnoResultsFound(true);
    }
  }, [entrySearchResult]);

  useEffect(() => {
    if (entries) {
      PaginateResults(entries);
      getPages(entries);
    }
  }, [entries]);

  useEffect(() => {
    if (entries) {
      PaginateResults(entries);
    }
  }, [currentPage]);

  useEffect(() => {
    if (entrySearchResult && entrySearchResult.length > 0) {
      setnoResultsFound(false);
    }
  }, [entrySearchResult]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      const SearchedData = Search(entries, searchQuery, searchByType);
      setEntrySearchResult(SearchedData);
      getPages(SearchedData);
      PaginateResults(SearchedData);
    } else if (
      searchQuery.length === 0 &&
      entrySearchResult &&
      entrySearchResult.length === 0
    ) {
      if (entries) {
        PaginateResults(entries);
        getPages(entries);
      }
    }
  }, [searchQuery, searchByType]);

  const loadAndSetProducts = async () => {
    try {
      const data = await loadProducts();
      setEntries(data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const PaginateResults = (entriesToDisplay: any) => {
    if (entriesToDisplay) {
      const result = Paginate(entriesToDisplay, currentPage, pageSize);
      setpaginatedEntries(result);
    }
  };

  const handleRefreshEntries = useCallback(() => {
    setnoResultsFound(false);
    loadAndSetProducts();
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  const getPages = (entries: any) => {
    if (entries) {
      const pages = Math.ceil(entries.length / pageSize);
      setTotalPages(pages);
    }
    return null;
  };

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
    totalPages,
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
