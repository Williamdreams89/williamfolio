import React from 'react'
import { HeaderComponent } from '../../components/Header'
import {  Paper, createStyles } from '@mantine/core';
import { IconBrandAws, IconBrandDjango, IconBrandDocker, IconBrandReact, IconBrandVercel, IconFlame, IconLink } from '@tabler/icons-react';
import FooterComponent from '../../components/FooterComponent';
import { Link } from 'react-router-dom';


const useStyles = createStyles(theme=>({
  main:{
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 2fr))",
    margin: 'auto',
    gap: '2rem',
  }, 
  projectImage:{
    width:'40px',
    height: '40px',
    borderRadius:'50%',
    display: 'block !important',
    objectFit: 'cover'
  }, 
  projectContainer:{
    width:'95%',
    height:'400px',
    padding: "20px",
    margin:'auto',
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    transition: '.7s ease-out',
    cursor: 'pointer',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],

    '&:hover':{
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
    }
  },

  leadText:{
    width:'85vw',
    margin: 'auto',
    [theme.fn.largerThan('md')]:{
      margin: '3rem 2rem',
      textAlign: 'left',
      width:'80ch',
    },
    [theme.fn.smallerThan('md')]:{
      margin: '3rem auto',
      marginTop: "0rem !important",
    }
  }, 
  projectLinks:{
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    marginTop: '2rem',
    paddingBottom: '1.5rem',
  }, 
  parentContainer:{
    marginBottom: '3rem !important',
    width: "75vw",
    margin: 'auto',

    [theme.fn.smallerThan('md')]:{
      width:'95vw',
      margin: 'auto'
    }
  }, 
  projectLink:{
    color: theme.colorScheme=='dark'?'whitesmoke': 'black', 
    textDecoration: 'none',

    '&:nth-child(2)':{
      fontWeight: 2000,
      transition:'1s ease',
      '&:hover':{
        color:'goldenrod'
      }
    },

    '&:nth-child(1)':{
      '&:hover':{
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
      }
    }
  }
}))


const projects = [
  {title:"Taskmate", description:"A simple to-do application with password authentication to enhance user productivity", imgSrc:'logo.jpg',url:"", githubUrl:"", stackImgSrc:[{name:IconBrandDjango}]},
  {title:"HIMSA UCC", description:"A seamless webapplication that automate manual repetitive processes such as announcements, access to reading materials.", imgSrc:'logo.jpg',url:"", githubUrl:"", stackImgSrc:[{name:IconBrandDjango},{name:IconBrandDocker}, {name:IconBrandReact}, {name:IconBrandVercel}]},
  {title:"A RESTful Authentication API", description:"A dockerized password authentication RESTful api with postgres database deployed with docker, nginx, gunicorn and AWS Fargate.", imgSrc:'logo.jpg',url:"", githubUrl:"", stackImgSrc:[]},
  {title:"A RESTful API Backend application", description:"A simple RESTful ecommerce API", imgSrc:'logo.jpg',url:"", githubUrl:"", stackImgSrc:[{name:IconBrandDocker}]},
  {title:"Church Management System", description:"A seamless full-stack web application build with DRF and React", imgSrc:'logo.jpg',url:"", githubUrl:"", stackImgSrc:[]},
]

const Projects = () => {
  const {classes, theme} = useStyles()
  return (
    <Paper>
      <div className={classes.parentContainer}>
        <HeaderComponent />
        <div className={classes.leadText}>
          <h1>Things I have worked on trying to change the view of the world.</h1>
          <p style={{}}>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
        </div>
        <main className={classes.main}>
            {projects.map((project=><div key={project.title} className={classes.projectContainer}>
              <img src={`/images/${project.imgSrc}`} className={classes.projectImage} alt='image' />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={classes.projectLinks}>
              <Link to={project.githubUrl} className={classes.projectLink}><span style={{display: 'flex', gap:'1rem'}}><IconLink />github.com</span></Link>
              <Link to={project.url} className={classes.projectLink}><IconFlame /></Link>
              </div>
            </div>))}
        </main>
      </div>
      <FooterComponent />
    </Paper>
  )
}

export default Projects