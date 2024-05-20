"use client"
import React, { useState } from 'react'
import "@/css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

export default function Navbar() {
	const [isCollapse, setIsCollapse] = useState(false)
  return (
	  <div className={'navbar'}>
		  <div className='logo'>
			  Shivam Portfolio
		  </div>
		  <ul className='navbar-menu'>
			  <li>Introduction</li>
			  <li>About me</li>
			  <li>Skills</li>
			  <li>Education</li>
			  <li>Projects</li>
			  <li>Certification</li>
		  </ul>
		  <div className='social-media'>
			  
		  </div>
	</div>
  )
}
