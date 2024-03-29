import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Provideredux from '@/context/authredux'
import Provider from '@/context/AuthContext.js'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'surya store',
  description: 'demo website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap" rel="stylesheet"/>

      </head>

      <body className={inter.className}> 
      <Provideredux>
        <Provider>
      < Navbar/>
      {children}
      <Footer/>
       </Provider>
      </Provideredux>
        </body>

    </html>
  )
}
