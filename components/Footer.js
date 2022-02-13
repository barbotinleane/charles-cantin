import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div>
            <Link href="/galerie"><a className="footer-link">Galerie</a></Link><br/>
            <Link href="/tarifs"><a className="footer-link">Tarifs</a></Link><br/>
            <Link href="/contact"><a className="footer-link">Contact</a></Link>
        </div>

        <div>
            <Link href="https://www.instagram.com/" passHref={true}>
                <FontAwesomeIcon icon={faInstagram} style={{height:'40px'}} className="icon footer-link"/>
            </Link>
            <Link href="https://www.facebook.com/" passHref={true}>
                <FontAwesomeIcon icon={faFacebook} style={{height:'40px'}} className="icon footer-link"/>
            </Link>
        </div>
    </footer>
  )
}

export default Footer