import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Tarif = ({ title, description, price=null }) => {
  return (
    <div className='col-12 col-md-4'>
      <div className='box-tarifs mx-md-2'>
        <h3 className='text-expletus size-1 text-center'>{title}</h3>
        <p>{description}</p>
        <p className='size-2 text-end text-blue'>{price}</p>
        <div className='text-center'>
          <button className='btn-red'>
            <FontAwesomeIcon style={{height:'25px'}} icon={faCartPlus}/>
            <Link href="/contact" passHref={true}>
              &nbsp;Réserver
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tarif