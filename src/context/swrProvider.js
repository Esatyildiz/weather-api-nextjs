"use client";

import { SWRConfig } from "swr";
import { fetcher } from "@/services/fetcher";

export default function SWRProvider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        shouldRetryOnError: false,
        dedupingInterval: 10000,
        errorRetryCount: 1,
      }}
    >
      {children}
    </SWRConfig>
  );
}
