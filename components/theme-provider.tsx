"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NextThemeProvider {...props}>
      <ThemeInner>{children}</ThemeInner>
    </NextThemeProvider>
  )
}

function ThemeInner({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useContext(ThemeProviderContext)

  return (
    <ThemeProviderContext.Provider value={{ theme: (theme as Theme), setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}