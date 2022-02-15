import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Form } from "react-bootstrap"
import Header from '../components/Header'
import Footer from '../components/Footer'

const galerie = () => {
  const [images, setImages] = useState({
    images:[]
  });
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/api/'+category,
      );

      setImages(result.data);
    };

    fetchData();
  }, [category]);

  const changeCategory = (event) => {
    setCategory(event.target.value)
  }

  return (
    <>
        <Header/>
    
        <main className="main">
          <h1 className='text-center size-2 text-expletus-bold p-5'>
            Galerie
          </h1>

          <div className='section'>
            <p>Choisir une catégorie de photos...</p>
            <Form.Select aria-label="Choose a category" onChange={changeCategory.bind(this)}>
              <option value="all">Toutes les catégories</option>
              <option value="famille">Famille</option>
              <option value="mariage">Mariage</option>
              <option value="bebe">Bébé</option>
              <option value="grossesse">Grossesse</option>
              <option value="couple">Couple</option>
              <option value="bapteme">Baptême</option>
            </Form.Select>
          </div>

          <div className='row section'>
            {images.images.map((image, index) => {
              return (
                <div className='py-3 col-12 col-sm-6 col-md-4' key={index}>
                  <Image 
                  src={image.url}  
                  alt="Photo pexels" 
                  width={image.width} 
                  height={image.height} 
                  layout="responsive"
                  />
                </div>
              )
            })}
          </div>
        </main>

        <Footer/>
    </>
  )
}

export default galerie