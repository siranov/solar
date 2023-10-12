import { Inter } from 'next/font/google'
import './global.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solar Car Project',
  description: 'Solar Car Project at University of the Pacific',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./app/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
