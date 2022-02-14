import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import moi from '../public/moi.jpg'
import photo1 from '../public/pexels-anna-shvets-4586685.jpg'
import photo2 from '../public/pexels-leah-kelley-4499827.jpg'
import photo3 from '../public/pexels-vlada-karpovich-5790837.jpg'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charles Cantin - Photographe</title>
        <meta name="description" content="Découvrez mes plus belles photographies ainsi que mes tarifs..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="main">
        <div className="bg-home">
          <div className="text-home size-1">
            <h1>Charles Cantin</h1>
            <p className="text-center text-comforter">Photographe</p>
          </div>
        </div>

        <div className="bg-light-cyan section">
          <h2>Qui suis-je ?</h2>
          <p>
            Je m&apos;appelle Charles Cantin, j&apos;ai 32 ans. Depuis mon enfance, je suis passionné 
            par la photographie. Pour vous mettre dans la confidence, à 11 ans, j&apos;ai rassemblé 
            toutes mes économies des deux années précédentes pour m&apos;offrir mon premier appareil 
            photo… Et depuis, la photo ne m&apos;a plus quitté !
          </p>

          <p>
            J&apos;adore capturer des instants de bonheur et d&apos;amour. Pour moi, la photo c&apos;est cela.
          </p>

          <p>
            Alors prenez du plaisir sur mon site et n&apos;hésitez pas à me contacter !
          </p>

          <div className='w-75 mx-auto'>
            <Image src={moi} alt="Photo de profil récupérée sur pexels"/>
          </div>
        </div>

        <div className='section'>
          <h2 className='text-center pb-5'>Galerie</h2>

          <div className='row'>
            <div className='col-6'>
              <Image src={photo3} alt="Photo de couple récupérée sur pexels"/>
            </div>
            <div className='col-6'>
              <Image src={photo1} alt="Un père et son bébé récupérée sur pexels"/>
            </div>
            <div className='col-12'>
              <Image src={photo2} alt="Une jeune femme récupérée sur pexels"/>
            </div>
          </div>

          <div className="text-center pt-5">
            <Link href="/galerie" passHref={true}>
              <button className="btn-outline-dark">Voir plus</button>
            </Link>
          </div>
        </div>

        <CallToAction sentence={"Alors, décidés ?"}/>
        
      </main>

      <Footer/>
    </div>
  )
}
