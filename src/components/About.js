import React from 'react';
import 'bulma/css/bulma.min.css';

export default function About () {
    return(
        <section className="section" id="about">
        <div className="section-heading">
            <h3 className="title is-2">About Me</h3>
            <div className="container">
                <p>
                    I'm a pharmacist who enjoys learning new things and I'm always looking to expand my horizons whether it's in pharmacy or in other ventures.
                </p>
                <p>
                    In my free time, I enjoy spending time with my family and my four dogs. I enjoy camping and mountain biking. 
                    I also enjoy puzzles, video games, and Legos.
                </p>
            </div>
        </div>
    </section>
    );
};