import React from 'react'
import Link from 'next/link'

const CallToAction = ({ sentence }) => {
  return (
    <div className="bg-blue section">
        <div className='size-1 text-expletus'>{sentence}</div>
        <div className="text-center pt-5">
            <Link href="/tarifs" passHref={true}>
                <button className="btn-red">Voir les tarifs</button>
            </Link>
        </div>
    </div>
  )
}

export default CallToAction