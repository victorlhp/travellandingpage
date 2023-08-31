import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next'

export const metadata = {
  title: 'Travel Landing Page',
}

// const quicksand = Quicksand({

// })

function Logo() {
  return (
    <p className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo/>
        </header>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
