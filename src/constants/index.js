import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Concept Artist",
      icon: web,
    },
    {
      title: "2D & 3D Animator",
      icon: mobile,
    },
    {
      title: "3D Modeller & Rigger",
      icon: backend,
    },
    {
      title: "Motion Graphics Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "North Bengal St Xavier University",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - April 2021",
      points: [
        "Participated in Cultural fair",
        "Participated in Inter College Debate Competitions",
        "Attended many seminars and participated in science fair",
      ],
    },
    {
      title: "Hobbies",
      company_name: "Reading",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2015 - present",
      points: [
        "Devourer of books",
        "Has a massive collection",
        "Currently, focusing on collecting art books",
        "Has written their fair share of short stories in local newspapers",
      ],
    },
    {
      title: "Field of Interest",
      company_name: "Animator",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - present",
      points: [
        "Developing and maintaining technical skills required for the animation industry.",
        "Has worked on few amateur short films",
        "Currently making a short film of their own",
      ],
    },
    {
      title: "Experience",
      company_name: "Indie Short Film",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Dec 2023",
      points: [
       "Developed script and character design of a principal character",
       "Was in charge of motion graphics and post production"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "An intriguing artist with a penchant for morbid works.",
      name: "Mrinalini",
      designation: "Intern",
      company: "Himalayan Darpan",

      image: "./testimonial/Mrin.jpg",
    },
    {
      testimonial:
        "An artist who truly cares about their works and in return fulfills the satisfaction of their clients.",
      name: "Kapil R",
      designation: "Founder",
      company: "Cheripicks",
      image: "./testimonial/Cheri.jpg",
    },
  
  ];
  
  const projects = [
    {
      name: "Motion Poster",
      description:
        "An attempt at motion poster that i did in After Effects. This Chinese theatrical posters of Studio Ghibli films are really beautiful. I think this one in particular was created by Chinese artist, Zao Dao",
      tags: [
        {
          name: "AfterEffects",
          color: "blue-text-gradient",
        },
        {
          name: "MotionGraphics",
          color: "green-text-gradient",
        },
        {
          name: "FilmPoster",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.instagram.com/reel/C_qriuKJlwX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      name: "Game Asset",
      description:
        "To be fair, this was my first attempt at sculpting something seriously. The design of the weapon is my very own.",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        {
          name: "GameAsset",
          color: "green-text-gradient",
        },
        {
          name: "Sculpting",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.instagram.com/p/C_qvI9xzU1D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      name: "Character Design",
      description:
        "The rendering is inspired by Fresco-style texturing.",
      tags: [
        {
          name: "Painting",
          color: "blue-text-gradient",
        },
        {
          name: "Fresco",
          color: "green-text-gradient",
        },
        {
          name: "Procreate",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.instagram.com/p/C1zrupNhmYD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
