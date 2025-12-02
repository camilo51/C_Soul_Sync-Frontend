"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { getAll } from '@/services/spotifyService';

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  searchResults: any;
  search: () => Promise<void>;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any>({});

  const search = async () => {
    if (!query.trim()) return;
    try {
      const res = await getAll({ search: query });
      if (res.success) {
        setSearchResults(res.data);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const clearSearch = () => {
    setSearchResults({});
    setQuery('');
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, searchResults, search, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
}