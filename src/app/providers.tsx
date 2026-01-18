"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import type * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid reuse of queryClient across different requests if you have
  // more than one client component in your app that calls getQueryClient().
  // Using a singleton for the browser and creating a new one for each
  // server request is handled by getQueryClient.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
