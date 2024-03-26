"use client";

import { PropsWithChildren, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface QuerryProps {
  children: ReactNode
}

export default function ReactQueryProvider(props: PropsWithChildren<QuerryProps>) {
  const { children } = props;
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}