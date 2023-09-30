import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next'

export const metadata = {
  title: 'Travel Landing Page',
}

// const quicksand = Quicksand({

// })

function Logo({x, y}) {
  return (
    <p style={{left: x, top: y}}className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

function ItemMenu({nome}) {
    return (
      <p className={styles.itemMenu}>{nome}</p>
    );
}

function Menu({children, x, y}) {
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome} > {itemMenu}</li>
      ))}
    </ul>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={135} y={53}/>
        <Menu x={435} y={60}> 
          <ItemMenu nome="Home"/>
          <ItemMenu nome="About"/>
          <ItemMenu nome="Contact"/>
          <ItemMenu nome="Blog"/>
          <ItemMenu nome="Videos"/>
        </Menu>
        </header>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
