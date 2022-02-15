import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'


const contact = () => {
  return (
    <>
        <Header/>
            <main className="main">
                <h1 className='text-center size-2 text-expletus-bold p-5'>
                    Contact
                </h1>

                <div className='section'>
                    <Form/>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default contact