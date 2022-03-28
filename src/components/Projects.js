import React from "react";
import projectteam from '../assets/projectteamSS.png';
import jsquiz from '../assets/javascriptquizss.png';
import mjm from '../assets/mjm.png';
import weatherdash from '../assets/weatherdash.png';
import workday from '../assets/workday.png';
import 'bulma/css/bulma.min.css';

export default function Projects() {
    return(
        <section className="section" id="projects">
            <div className="section-heading">
                <h3 className="title is-2">Works/Projects</h3>
            </div>
            <div className="container">
                <div className="columns">
                    {/* <!-- left side of screen --> */}
                    <div className="column is-6">
                        {/* <!-- project team card --> */}
                        <div className="card m-3">
                            <header className="card-header has-background-dark">
                                <p className="card-header-title"> 
                                    <span className="has-text-white">Project Team </span>
                                    <span className="tag m-1">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag m-1">JavaScript</span>
                                </p>
                            </header>
                            <div className="card-content">
                                <figure class="image">
                                    <img src={projectteam} alt={"APP screenshot"}/>
                                </figure>
                            </div>
                            <footer className="card-footer has-background-light">
                                <a href="https://jennyk1989.github.io/project-team/" class="card-footer-item has-text-black">App Link</a>
                                <a href="https://github.com/jennyk1989/project-team" class="card-footer-item has-text-black">GithHub Code</a>
                            </footer>
                        </div>
                    {/* <!-- weatherdash card --> */}
                    <div class="card m-3">
                        <header class="card-header has-background-dark">
                            <p class="card-header-title"> 
                                <span class="has-text-white">Weather Dashboard</span>
                                <span class="tag m-1">HTML</span>
                                <span class="tag">CSS</span>
                                <span class="tag m-1">JavaScript</span>
                            </p>
                        </header>
                        <div class="card-content">
                            <figure class="image">
                                <img src={weatherdash} alt={"APP screenshot"}/>
                            </figure>
                        </div>
                        <footer class="card-footer has-background-light">
                            {/* <!-- APP link --> */}
                            <a href="https://jennyk1989.github.io/weather-dash/" class="card-footer-item has-text-black">App Link</a>
                            {/* <!-- github link --> */}
                            <a href="https://github.com/jennyk1989/weather-dash" class="card-footer-item has-text-black">GithHub Code</a>
                        </footer>
                    </div>
                    {/* <!-- project 2 card --> */}
                    <div class="card m-3">
                        <header class="card-header has-background-dark">
                            <p class="card-header-title"> 
                                <span class="has-text-white">MJM Task Master</span>
                                <span class="tag m-1">Node</span>
                                <span class="tag">Express</span>
                                <span class="tag m-1">JavaScript</span>
                            </p>
                        </header>
                        <div class="card-content">
                            <figure class="image">
                                <img src={mjm} alt={"APP screenshot"}/>
                            </figure>
                        </div>
                        <footer class="card-footer has-background-light">
                            {/* <!-- APP link --> */}
                            <a href="https://sheltered-woodland-56293.herokuapp.com/" class="card-footer-item has-text-black">App Link</a>
                            {/* <!-- github link --> */}
                            <a href="https://github.com/jennyk1989/MJM-Task-Master" class="card-footer-item has-text-black">GithHub Code</a>
                        </footer>
                    </div>            
                </div>
                {/* <!-- end of left side column --> */}

                {/* <!-- right side of screen --> */}
                <div className="column is-6">
                    {/* <!-- Javascript Quiz Card --> */}
                    <div className="card m-3">
                        <header className="card-header has-background-dark">
                            <p className="card-header-title"> 
                                <span className="has-text-white">JavaScript Quiz</span>
                                <span className="tag m-1">HTML</span>
                                <span className="tag">CSS</span>
                                <span className="tag m-1">JavaScript</span>
                            </p>
                        </header>
                        <div className="card-content">
                            <figure className="image">
                                <img src={jsquiz} alt={'App screenshot'}/>
                            </figure>
                        </div>
                        <footer className="card-footer has-background-light">
                            {/* <!-- APP link --> */}
                            <a href="https://jennyk1989.github.io/javascript.quiz/" class="card-footer-item has-text-black">App Link</a>
                            {/* <!-- github link --> */}
                            <a href="https://github.com/jennyk1989/javascript.quiz" class="card-footer-item has-text-black">GithHub Code</a>
                        </footer>
                    </div> 
                {/* <!-- workday scheduler --> */}
                <div class="container">
                    <div class="card m-3">
                        <header class="card-header has-background-dark">
                            <p class="card-header-title"> 
                                <span class="has-text-white">Work Day Scheduler</span>
                                <span class="tag m-1">HTML</span>
                                <span class="tag">CSS</span>
                                <span class="tag m-1">JavaScript</span>
                            </p>
                        </header>
                        <div class="card-content">
                            <figure class="image">
                                <img src={workday} alt={"APP screenshot"}/>
                            </figure>
                        </div>
                        <footer class="card-footer has-background-light">
                            {/* <!-- APP link --> */}
                            <a href="https://jennyk1989.github.io/workday-scheduler/" class="card-footer-item has-text-black">App Link</a>
                            {/* <!-- github link --> */}
                            <a href="https://github.com/jennyk1989/workday-scheduler" class="card-footer-item has-text-black">GithHub Code</a>
                        </footer>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </section>
    );
};