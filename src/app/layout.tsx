import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/utils/theme-provider'
import { Providers } from '@/components/utils/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextStarter ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
