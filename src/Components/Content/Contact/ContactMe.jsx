import React from 'react'

const ContactMe = () => {


    return (
        <div style={{
            textAlign: 'left',
            marginTop: '10vh',
            marginLeft: '12.5vw',
            paddingTop: '8vh',
            paddingLeft: '14vw',
            height: '72vh',
            width: '75vw',
            backgroundColor: '#98a08a',
            borderRadius: '12px'
        }}>
            <h2>Contact Me:</h2>
            <form class="contactForm" action="https://formspree.io/f/xgepkvva" method="POST" style={{marginLeft: '2vw'}}>
                <label>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name: </label>
                        <br />
                        <input style={{marginLeft: '1vw', width: '42vw', borderRadius: '10px', border: '1px solid #373c36'}} type="name" class="form-control" placeholder="    Jane Doe" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email Address: </label>
                        <br />
                        <input style={{marginLeft: '1vw', width: '42vw', borderRadius: '10px', border: '1px solid #373c36'}} type="email" class="form-control" placeholder="    jdoe@gmail.com" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message: </label>
                        <br />
                        <textarea style={{marginLeft: '1vw', width: '42vw', borderRadius: '10px', maxHeight: '15vh', border: '1px solid #373c36'}} class="form-control" name="message" rows="3" />
                    </div>
                </label>
                <br />
                <button className="submitButton" type="submit" style={{width: '10vw', borderRadius: '12px', marginLeft: '1vw', border: '1px solid #373c36', backgroundColor: '#373c36', color: 'white'}}>Send</button>
            </form>
        </div>
    )
}

export default ContactMe
