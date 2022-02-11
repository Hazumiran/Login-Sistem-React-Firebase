import React from 'react';
import fire from './fire';

const Hero = (props) => {

const {handleLogout}=props;

    return(
        <section className='hero'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;