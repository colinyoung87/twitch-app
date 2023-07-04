import { ThemeProvider } from '@/providers/ThemeProvider'
import '../globals.css'

export const metadata = {
  title: 'Twitch Next App',
  description: 'No idea what it does yet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
