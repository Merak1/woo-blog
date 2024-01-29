"use client";

import { BlogContextProvider } from "@/hooks/useWooBlog";
import React from "react";

interface BlogProviderProps {
  children: React.ReactNode;
}

const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  return <BlogContextProvider> {children}</BlogContextProvider>;
};

export default BlogProvider;
