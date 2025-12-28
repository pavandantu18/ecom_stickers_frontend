import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        Built with
        <FontAwesomeIcon icon={faHeart}
        className='footer-icon'
        aria-hidden="true"
        />
        by Pavan
    </footer>
  )
}

export default Footer