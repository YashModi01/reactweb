import React from 'react'
import Common from './Common'
import web from './images/img8.png'

const About = () => {
    return (
        <>
            <Common 
            name = "Welcome to About Page" 
            imgsrc = {web} 
            visit = "/contact" 
            btname = "Contact Us" />
        </>
    )
}

export default About
