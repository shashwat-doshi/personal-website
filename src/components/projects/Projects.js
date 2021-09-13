import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../../images/doodlejump.jpg";
import project2 from "../../images/doodlejump.jpg";
import project3 from "../../images/doodlejump.jpg";
import project4 from "../../images/doodlejump.jpg";
import project5 from "../../images/doodlejump.jpg";
import project6 from "../../images/doodlejump.jpg";

import "./projects.scss";

import "./stars.scss";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "calc(100vh - 70px)", // each section's height = 100vh - topbar's height(which is 70px (refer to topbar.scss))
    //background-color: lightsalmon;

    position: "relative", // so that the text typed is not hidden behind the background color
    top: "70px", // start section after 70px (which is at end of topbar)  
    // background: "#233",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    height: "380px",
  },
}));

const projects = [
  {
    name: "Project Growth",
    description: `Built an online incubator platform for the African Impact Initiative. Worked in a team of 7 to build a full-stack\
    web application that helps young African entrepreneurs build their ideas into a fully grown startup.`,
    image: project1,
  },
  {
    name: "Doodle Jump",
    description: `Built the famous Doodle Jump game through the use of Assembly Language. It supports in-game points graphics, \
    shooting enemies, and seamless movement of the doodle character.`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },
];


const Projects = () => {
  const classes = useStyles();
  return (
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <Box component="div" className={classes.mainContainer} id="projects">
        <div class="element">
          <h2>Projects</h2>
        </div>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                 
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;