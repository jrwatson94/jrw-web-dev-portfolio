import React from 'react';
import Project from '../components/Project';
import logo from '../assets/logo.png';
import ace from '../assets/ace.png';
import game from '../assets/game.png';
import skytop from '../assets/wing.png';
import go from '../assets/go.jpg';

function ProjectsContainer(){
    return(
        <div className="container">
            <h2 className="title">My Work</h2>
            <hr></hr>
            <div className="projects">
                <div className="row">
                <div className="col-12">
                    <Project 
                            name={"Skytop Online"} 
                            logo={skytop}
                            githubLink={""} 
                            intro={
                                <p className="p-4">
                                        A digital news portal publishing weekly content about 
                                        corporate social responsibility, investment management, 
                                        and cyber security 
                                </p>
                            }
                            text={
                                <div> 
                                    <ul>
                                        <li>
                                            Developed using a WordPress headless CMS backend architecture, rendered to a decoupled frontend built with React, via Wordpress REST API
                                        </li>
                                        <li>
                                            Created dynamic web pages displaying digital interviews, articles, information about authors, as well as events pages advertising upcoming conferences about related topics
                                        </li>
                                        <li>
                                            Implemented fully functional eCommerce capability powered with WooCommerce, which allows users to purchase tickets and register for various Skytop events
                                        </li>
                                        <li>
                                            Built every aspect of the application entirely by myself, deployed via Digital Ocean
                                        </li>
                                    </ul>
                                </div>

                            } 
                            url={""}
                            website_link={"https://skytopstrategies.com/"} 
                        />
                    </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <Project 
                            name={"Gotham Oracle"} 
                            logo={go}
                            githubLink={""} 
                            intro={
                                <p className="p-4">
                                        A New York City events search engine, utilizing a 
                                        suite of web scrapers to find events happening 
                                        in New York City, which users can filter based 
                                        on their preferences
                                </p>
                            }
                            text={
                                <div> 
                                    <ul>
                                        <li>
                                            Built an interactive map feature using Mapbox, which enables users to filter events based on their preferred borough, or even individual neighborhood
                                        </li>
                                        <li>
                                            Created the Contact Us page, and contributed to various other frontend components, including the FAQ, user registration and landing pages
                                        </li>
                                        <li>
                                            Implemented site-wide mobile responsiveness to ensure compatibility with desktop, laptop, tablet, and mobile screen sizes
                                        </li>
                                    </ul>
                                </div>

                            } 
                            url={""}
                            website_link={"https://gothamoracle.com/"} 
                        />
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12">
                        <Project 
                            name={"Ascent"} 
                            logo={logo}
                            githubLink={""} 
                            intro={
                                <p className="p-4">
                                        A rock climbing exploration website, where users can search for, favorite, and 
                                        learn about a vast number of rock climbing sites throughout the United States
                                </p>
                            }
                            text={
                                <div>
                                    
                                    <ul>
                                        <li>
                                            Developed with Ruby on Rails, Postgres, Javascript and React/Redux
                                        </li>
                                        <li>
                                            Created dynamic search forms and information cards for each climb
                                        </li>
                                        <li>
                                            Implemented an interactive map feature, using the Google Maps API to mark and display climbing areas 
                                        </li>
                                    </ul>
                                </div>

                            } 
                            url={"https://player.vimeo.com/video/501043516"} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Project 
                            name={"BlackJackJS"} 
                            logo={ace}
                            githubLink={""} 
                            intro={
                                <p className="p-4">
                                        A fun, engaging digital blackjack game with card animations and gameplay statistics tracking 
                                </p>
                            }
                            text={
                                <div>
                                    
                                    <ul>
                                        <li>
                                            Implemented game logic for hitting, staying, busting over 21, automated dealer hit below 17, and variable Ace card value
                                        </li>
                                        <li>
                                            Created custom CSS animations for the playing cards
                                        </li>
                                        <li>
                                            Used the DeckOfCards API to generate random decks/cards
                                        </li>
                                        <li>
                                            Built a Rails server side to persist user data and track player performance
                                        </li>
                                    </ul>
                                </div>
                            } 
                            url={"https://player.vimeo.com/video/493391077"} 
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Project 
                            name={"BackLog"} 
                            logo={game}
                            githubLink={""} 
                            intro={
                                <p className="p-4">
                                        A video game cataloging app used to search for, 
                                        like, and review various video games and console systems
                                </p>
                            }
                            text={
                                <div >
                                    
                                    <ul>
                                        <li>
                                            Seeded rails backend with data from the RAWG video game API
                                        </li>
                                        <li>
                                            Built the app entirely using Rails
                                        </li>
                                        <li>
                                            Implemented server models, data relationships, controllers and view pages, as well as Auth via BCrypt
                                        </li>
                                    </ul>
                                </div>
                            } 
                            url={"https://player.vimeo.com/video/493390621"} 
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer;