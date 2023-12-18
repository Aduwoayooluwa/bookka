"use client"
import { Toaster } from "@/components/ui/toaster"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

export default function GeneralProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
          {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
          
    </div>
  )
}