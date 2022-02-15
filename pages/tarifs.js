import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tarif from '../components/Tarif'

const tarifs = () => {
  return (
    <>
        <Header/>
    
        <main className="main">
          <h1 className='text-center size-2 text-expletus-bold p-5'>
            Tarifs et Prestations
          </h1>

          <div className='section'>
            <h2 className='text-comforter'>Séances</h2>
            
            <div className="row">
              <Tarif 
              title="Juste moi" 
              description="Séance pour une personne, en extérieur ou en studio"
              price="130€"
              />
              <Tarif 
              title="Pour deux" 
              description="Pour deux personnes, en extérieur ou en studio"
              price="195€"
              />
              <Tarif 
              title="Famille" 
              description="Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
              30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)"
              price="220€"
              />
            </div>
          </div>

          <div className='section'>
            <h2 className='text-comforter'>Pour les occasions</h2>

            <div className='row'>
              <Tarif 
              title="Il était une fois" 
              description="Photo de grossesse (À votre domicile, en extérieur ou en studio)"
              price="160€"
              />
              <Tarif 
              title="Mon bébé" 
              description="Photo d’enfant jusqu’à 3 ans (photo à domicile)"
              price="100€"
              />
              <Tarif 
              title="J'immortalise l'évènement sur mesure" 
              description="Prestation de mariage ou de baptême sur devis"
              />
            </div>
          </div>
        </main>

        <Footer/>
    </>
  )
}

export default tarifs