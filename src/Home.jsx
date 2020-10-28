import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import web from './images/img9.png'

const Home = () => {
    return (
        <>
            <Common 
            name = "Expand your skills with" 
            imgsrc = {web} 
            visit = "/service" 
            btname = "Get Started" />
        </>
    )
}

export default Home
