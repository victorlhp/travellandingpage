import './globals.css'

export const metadata = {
  title: 'Travel Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
