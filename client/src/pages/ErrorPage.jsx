import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../assets/404.png'

const ErrorPage = () => {
    const Navigate = useNavigate()
    
 //redirect to prev page
    useEffect(() => {
        setTimeout(() => {
            Navigate(-1)
        }, 6000)
    })

  return (
    <section className="errorPage">
        <div className="errorPage_container">
            <img src={Image} alt="Page Not Found" />
            <h1>404</h1>
            <p>This page does not exist. You will be redirected to the home page shortly</p>
        </div>
    </section>
  )
}

export default ErrorPage