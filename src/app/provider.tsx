import { Toaster } from "@/components/ui/toaster"

export default function GeneralProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div>
          {children}
          <Toaster />
    </div>
  )
}