import React from 'react'
import 'bulma/css/bulma.min.css';

export default function Footer() {
  return (
    <footer className="section has-background-light p-4" id="contact">
        <div className="container">
            
            <div className="is-flex is-justify-content-space-around">
                    <a className="icon-text" href="https://github.com/jennyk1989">
                        <span className="icon">
                            <i className="fab fa-github"/>
                        </span>
                        <span> GitHub </span>
                    </a>
                    <a className="icon-text" href="mailto:jkeenepharmd@gmail.com">
                        <span className="icon">
                            <i className="fas fa-envelope-square"></i>
                        </span>
                        <span> Email </span>
                    </a>
                    <a className="icon-text" href="https://www.linkedin.com/in/jennifer-keene-60aa4a225/">
                        <span className="icon">
                            <i className="fab fa-linkedin"></i>
                        </span>
                        <span>LinkedIn</span>
                    </a>
            </div>
        </div>
    </footer>
  )
}
