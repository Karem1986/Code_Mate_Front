import React from "react";
import video from "./video.mp4";
import { useHistory } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import { Box, Grid, Paper, Snackbar, Button, Slide } from "@material-ui/core";
import { useStyles } from "./styles"

export default function Homepage() {

  //Material UI STYLES:
  const classes = useStyles()

  //Dynamic route for button to book session page
  const history = useHistory();
  //Hooks: useState and useEffect ---> to fetch data from API for example

  //1.Three developers fotos and reviews, hardcoded for now, after can be from database
  const testimonials = [
    {
      name: "Olena",
      description: "Front end developer",
      imageUrl:
        "https://avatars0.githubusercontent.com/u/7324142?s=460&u=def0ad84ddc36e8c631028faecfe5b6bfdded1cb&v=4",
      testimonial:
        "Code mate is what I needed to motivate myself with someone that understands the struggle of coding your own projects",
    },

    {
      name: "Marios",
      description: "Full stack developer",
      imageUrl:
        "https://avatars2.githubusercontent.com/u/50610396?s=460&u=1f7c3ef1e02913b6ada27e305ac0cfd926d48a63&v=4",
      testimonial:
        "Code mate is fantastic!, not only you can buddy up with someone whenever you want, but also organize meetups and events to find work as a developer",
    },

    {
      name: "Hannah",
      description: "Full stack developer",
      imageUrl:
        "https://avatars2.githubusercontent.com/u/54165871?s=460&u=cc54240dff97246e937161b37796991ddeeb3e03&v=4",
      testimonial:
        "Since using Code mate, I have met lots of awesome developers, sessions are easy to book and you can do so whenever you need it",
    },
  ];

  //button to book session
  const goBookingSession = (e) => {
    history.push(`/code_session`);
  };

  return (
    <div className="homepage">
      <h1>Welcome to Code Mate</h1>

      <video
        src={video}
        alt="code-mate"
        autoPlay="true"
        width="900"
        height="500"
      ></video>

      <div>
      
        <div>
          <h3>This is what our happy developers say</h3>
        </div>

        {testimonials.map((data, index) => {
          return (
            <Testimonials
              key={index}
              name={data.name}
              description={data.description}
              imageUrl={data.imageUrl}
              testimonial={data.testimonial}
            />
          );
        })}
      </div>
      <button onClick={goBookingSession}>Book your free session</button>
    </div>
  );
}