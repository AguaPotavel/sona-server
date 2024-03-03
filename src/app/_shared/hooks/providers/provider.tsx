'use client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'jotai'
import ConvexClientProvider from './convex-client-provider'

type Props = {
  children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {

  return (
    <Provider>
      <ConvexClientProvider>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </ConvexClientProvider>
    </Provider>
  )
}
