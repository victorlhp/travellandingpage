import styles from './page.module.css'
import Image from 'next/image'
import bali from '../public/bali.png'
import cyprus from '../public/cyprus.png'
import hawaii from '../public/hawaii.png'
import seta from '../public/arrow-right.svg'

function Titulo({x, y}) {
  return (
    <h1 style={{left: x , top : y}} className={styles.titulo}>Your Perfect Honeymoon </h1>
  );
}

function Texto({x, y}) {
  return (
    <h2 style={{left: x , top : y}} className={styles.texto}>Mayami is more than a honeymoon destination – it’s a perfect romantic spot for couples who like  spending time in beach. </h2>
  );
}

function Botao({x, y}) {
  return (
    <button style={{left: x, top: y}} className={styles.botao}>Start</button>
  )
}

function Card({localidade, imagem}) {
  return(
    <div className={styles.card}>
        <div className={styles.cabecalhoCard}>
          <p className={styles.localidade}>{localidade}</p>
          <Image src={seta}/>
        </div>
        <Image src={imagem} className={styles.imagem}/>
    </div>
  )
}

function Cards({children, x, y}) {
  return (
    <div style={{left: x, top: y}} className={styles.cards}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Botao x={135} y={601.72}/>
      <Cards x={135} y={801}>
        <Card localidade="Hawaii" imagem={hawaii}/>
        <Card localidade="Cyprus" imagem={cyprus}/>
        <Card localidade="Bali" imagem={bali}/>
      </Cards>

      <Titulo></Titulo>
      <Texto></Texto>
    </>
  )
}