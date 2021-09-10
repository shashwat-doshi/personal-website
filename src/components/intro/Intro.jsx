import "./intro.scss"
import { ExpandMore, GitHub, LinkedIn, ArrowRight, ArrowBackIos } from "@material-ui/icons"

import { init } from 'ityped'
import { useEffect, useRef, useState } from "react"
import React from "react";

import { Link } from 'react-router-dom'

import ParticlesBg from 'particles-bg'

import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

import Particles from "./Particles";
// import avatar from "../../introPic.png";




export default function Intro() {

    const textRef = useRef();

    // let wordList = ["student.", "developer.", "learner.", "foodie.", "cricket enthusiast.", "chocolate-lover."];

    // useEffect(() => {
    //     //console.log(textRef);
    //     init(textRef.current, {
    //         showCursor: true,
    //         strings: wordList.slice(0, 3).sort(() => Math.random() - 0.5).concat(wordList.slice(3).sort(() => Math.random() - 0.5)),
    //         backDelay: 700, // 1.5 sec = 1500
    //         typeSpeed: 150,
    //         startDelay: 1200,
    //         cursorChar: "|",
    //     });
    // }, [wordList])

    // var cursor = true;
    // var speed = 400;


    // setInterval(() => {
    //     if(cursor) {
    //       document.getElementById('cursor').style.opacity = 0;
    //       cursor = false;
    //     }else {
    //         document.getElementById('cursor').style.opacity = 1;
    //       cursor = true;
    //     }
    //   }, speed);

    const [currentSlide, setCurrentSlide] = useState(0); // setting state variables for photography slide... intial value is = 0.

    const data = [
        {
            img: "assets/photography/pic1.jpg",
        },
        {
            img: "assets/photography/pic2.jpg",
        },
        {
            img: "assets/photography/pic3.jpg",
        },
        {
            img: "assets/photography/pic4.jpg",
        },
        {
            img: "assets/photography/pic5.jpg",
        },
        {
            img: "assets/photography/pic6.jpg",
        },
        {
            img: "assets/photography/pic7.jpg",
        },
    ];

    const handlePhotoArrowClick = (direction) => { // direction is the argument passed/of to the function.
        direction === "left" ?
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) // if it is on the left, then if currentSlide number > first slide number(ie, its not on the first slide), then go to the previous slide. Otherwise, go to the last slide when u click left (hence the data.length - 1 is assigned to currentSlide as given at the end of this statement.)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0); // if it is on the right, then if currentSlide number < last slide number, then go to the last slide. Otherwise, go to the first slide (hence the 0 is there at the end of this statement.)
    };

    const useStyles = makeStyles((theme) => ({
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1),
        },
        title: {
            color: "tomato",
        },
        subtitle: {
            color: "tan",
            textTransform: "uppercase",
        },
        typedContainer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100vw",
            textAlign: "center",
            zIndex: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div className="sections">
            <div className="intro">
                <Box className={classes.typedContainer}>
                    <div className="imgContainer">
                        <img src="assets/introPic.png"></img>
                    </div>
                    <Typography className={classes.title} id="introName" variant="h4">
                        <Typed strings={["Shashwat Doshi"]} typeSpeed={40} />
                    </Typography>

                    <Typography className={classes.subtitle} id="introDesc" variant="h5">
                        <Typed
                            strings={[
                                "student ",
                                "developer ",
                                "learner ",
                                "foodie ",
                                "cricket enthusiast ",
                                "chocolate-lover ",
                            ]}
                            typeSpeed={70}
                            backSpeed={50}
                            loop
                        />
                    </Typography>
                </Box>
            </div>
            {/* <div className="intro" id="intro">
                <ParticlesBg num={14} type="cobweb" bg={true} />
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/my_pic.png"></img>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi there! I'm</h2>
                        <h1>Shashwat Doshi</h1>
                        <h4>( /ʃɑʃwɔːt/ SH-aa-SH-wat )</h4>
                        <h3>I am a <span ref={textRef}></span></h3>

                        <div className="container">

                            <a className="item" href="https://github.com/shashwat-doshi" target="_blank" >
                                <GitHub id="socialmedIcon" />
                                <h3>@shashwat-doshi</h3>
                            </a>
                            <a className="item" href="https://www.linkedin.com/in/shashwatdoshi/" target="_blank">
                                <LinkedIn id="socialmedIcon" />
                                <h3>LinkedIn</h3>
                            </a>

                        </div>
                    </div>
                    <a href="#aboutMe">
                        <ExpandMore className="downArrow" />
                    </a>
                </div>
            </div> */}
            <div className="aboutMe" id="aboutMe">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
                <div class="about-wrapper">
                    <div class="about-left">
                        <div class="about-left-content">
                            <div>
                                <div class="shadow">
                                    <div class="about-img">
                                        <img src="assets/my_pic_autumn.JPG" alt="" />
                                    </div>
                                </div>

                                <h2>Shashwat</h2>
                                <h3>App Developer @ UofT</h3>
                            </div>

                            <ul class="icons">
                                <a href="https://www.facebook.com/shashwat444/" id="iconLink" target="_blank"><li><i class="fab fa-facebook-f"></i></li></a>
                                <a href="https://www.instagram.com/doshiascharged/" id="iconLink" target="_blank"><li><i class="fab fa-instagram"></i></li></a>
                                <a href="mailto:shashwatpdoshi@gmail.com" id="iconLink" target="_blank"><li><i class="fab fa-google"></i></li></a>
                            </ul>
                        </div>
                    </div>

                    <div class="about-right">
                        <h1><span>hello </span>world!</h1>
                        <h2>Check out some of my work here!</h2>
                        <div class="about-btns">

                            <button type="button" class="btn btn-pink" onClick={() => window.open("https://drive.google.com/file/d/1Vf82NTTNe0NpZNjhx1ZybkfnnS8P8xXF/view?usp=sharing", "_blank")}>resume</button>
                            <button type="button" class="btn btn-white">projects</button>
                        </div>

                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I'm an aspiring 3rd year Computer Science student studying at the University of Toronto.</span>
                        </div>
                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I hold a passion for new emerging and upcoming technology. My curiosity drives me to learn something new everyday.</span>
                        </div>
                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I am specializing in the Entrepreneurship stream with a minor in Statistics.</span>
                        </div>
                        <a href="">
                            <ExpandMore className="downArrow" /></a>
                    </div>
                </div>
            </div>
            <div className="highlights">
                <section class="info">
                    <h2>Highlights</h2>
                </section>
                <section class="cards-wrapper">
                    <div class="card-grid-space">
                        <div class="num">01</div>
                        <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{ background: `url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)` }}>
                            <div>
                                <h1>Project Growth</h1>
                                <p>An online incubator platform built for the African Impact Initiative.</p>
                                <div class="date">August 2021</div>
                                <div class="tags">
                                    <div class="tag">Django</div>
                                    <div class="tag">Javascript</div>
                                    <div class="tag">SQL</div>
                                    <div class="tag">HTML</div>
                                    <div class="tag">CSS</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="card-grid-space">
                        <div class="num">02</div>
                        <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{ background: `url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)` }}>
                            <div>
                                <h1>Doodle Jump</h1>
                                <p>A fully-functional Doodle Jump game built through the use of Assembly Language.</p>
                                <div class="date">May 2021</div>
                                <div class="tags">
                                    <div class="tag">Assembly Language</div>
                                    <div class="tag">MARS Software</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="card-grid-space">
                        <div class="num">03</div>
                        <a class="card" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" style={{ background: `url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')` }}>
                            <div>
                                <h1>GameseeAI</h1>
                                <p>A surveillance web-application built for monitoring our personal belongings when left unattended in a public space.</p>
                                <div class="date">February 2020</div>
                                <div class="tags">
                                    <div class="tag">Python</div>
                                    <div class="tag">Javascript</div>
                                    <div class="tag">HTML</div>
                                    <div class="tag">CSS</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 */}
                </section>
            </div>
            <div className="photography">
                <Particles />
                {/* <ParticlesBg num={50} type="lines" bg={true} /> */}
                <h2>Photography</h2>
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    {/* we do this because whenever we want to click the left arrow, we need to move current slide by "left: -100vw" for next slide to show up. Got this "-100vw" value through experimentation. */}
                    {data.map(item => ( // for each container, return the below container
                        <div className="container">
                            <div className="item">
                                <img className="photographs" src={item.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <ArrowBackIos className="arrow left" onClick={() => handlePhotoArrowClick("left")} />
                <ArrowBackIos className="arrow right" onClick={() => handlePhotoArrowClick()} />
            </div>
            <footer class="site-footer">
                <div class="container">
                    <h3>That's all on this page folks!</h3>
                    <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/shashwat444/" target="_blank"><i class="fab fa-facebook-f" id="socIcon"></i></a></li>
                        <li><a class="instagram" href="https://www.instagram.com/doshiascharged/" target="_blank"><i class="fab fa-instagram" id="socIcon"></i></a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/in/shashwatdoshi/" target="_blank"><i class="fab fa-linkedin-in" id="socIcon"></i></a></li>
                        <li><a class="github" href="https://github.com/shashwat-doshi" target="_blank"><i class="fab fa-github" id="socIcon"></i></a></li>
                    </ul>

                    <em>"The people who are crazy enough to think that they can change the world are the ones who do."</em><em className="quoteAuthor"> ~ Steve Jobs</em>

                    <div className="madebyFooter">
                        <p class="copyright-text"> Made by Shashwat Doshi using React <i class="fab fa-react" id="ReactIcon"></i>
                        </p>
                    </div>
                </div>
            </footer>




        </div>


    )
}
