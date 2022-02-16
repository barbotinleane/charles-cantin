import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import moi from '../public/moi.jpg'
import photo1 from '../public/photos/pexels-anna-shvets-4586685.jpg'
import photo2 from '../public/photos/pexels-leah-kelley-4499827.jpg'
import photo3 from '../public/photos/pexels-vlada-karpovich-5790837.jpg'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

// The Storyblok Client
import Storyblok from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'

export default function Home(props) {
  const story = props.story

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
              <h1>
                { story ? story.name : 'My Site' }
              </h1>
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

            <DynamicComponent blok={story.content} />

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

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside of the preview mode
  let sbParams = {
    version: "published", // or 'draft'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}