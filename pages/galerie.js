import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Form } from "react-bootstrap"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Photo from '../components/Photo'

const galerie = () => {
  return (
    <>
        <Header/>
    
        <main className="main">
          <h1 className='text-center size-2 text-expletus-bold p-5'>
            Galerie
          </h1>

          <Photo/>
        </main>

        <Footer/>
    </>
  )
}

export default galerie