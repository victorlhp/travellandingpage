import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';
import facebook from '../public/facebook.svg'
import twitter from '../public/twitter.svg'
import linkedin from '../public/linkedin.svg'


export const metadata = {
  title: 'Travel Landing Page',
}

// const quicksand = Quicksand({
//   subsets: ['latin'],
//   display: 'swap',
// })

function Logo({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

function ItemMenu({nome}){
  return (
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}

function Icon({x, y}) {
  return (
    <p style={{left: x, top:y}} className={styles.icon}><Image src='/phone_icon.png' width={19} height={19}/></p>
  );
  
}

function Contato({x, y}) {
  return (
    <p style={{left: x, top:y}} className={styles.contato}> +38(0978849989)</p>
  );
  
}

function RedesSociais({x, y}) {
  return (
    <div style={{left: x, top: y}} className={styles.redesSociais}>
      <Image src={facebook}/>
      <Image src={twitter}/>
      <Image src={linkedin}/>
    </div>
  )
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

          <Icon></Icon>
          <Contato></Contato>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <RedesSociais x={1175} y={843}/>
        </footer>
      </body>
    </html>
  )
}