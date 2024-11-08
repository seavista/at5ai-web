import './globals.css'

export const metadata = {
  title: 'AT5.AI',
  description: 'High-Signal, AI News and Tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}