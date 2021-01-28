import React from 'react'
import Jumbotron from '../../../Assets/jumbotron.jpg'

const Splash = () => {
    return (
        <div className="Splash" style={{
            textAlign: 'center',
            marginTop: '10vh',
            marginLeft: '12.5vw',
            paddingTop: '25vh',
            height: '72vh',
            width: '75vw',
            backgroundColor: '#98a08a',
            borderRadius: '12px'
        }}>
                <h1 style={{
                    color: 'white'
                }}>Hi, I'm Emory.</h1>
                <br />
                <h3 style={{
                    color: 'white'
                }}>I'm a web developer &#38; designer with a passion for beauty and accessibility.</h3>
        </div>
    )
}

export default Splash
