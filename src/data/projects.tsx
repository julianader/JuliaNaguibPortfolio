import { skills, type SkillInterface } from '@/data/skills'
import type { SummaryLinkInterface } from '@/data/summary'
import styles from '@/styles/landing/Projects.module.scss'
import taskmanager1 from '@public/image/jpg/projects/TaskManager/1.png'
import taskmanager2 from '@public/image/jpg/projects/TaskManager/2.png'
import taskmanager3 from '@public/image/jpg/projects/TaskManager/3.png'
import taskmanager4 from '@public/image/jpg/projects/TaskManager/4.png'

import library1 from '@public/image/jpg/projects/LibrarySystem/1.jpg'
import library2 from '@public/image/jpg/projects/LibrarySystem/2.jpg'
import library3 from '@public/image/jpg/projects/LibrarySystem/3.jpg'
import library4 from '@public/image/jpg/projects/LibrarySystem/4.jpg'

import dicot from '@public/image/png/company/dicot.png'
import dicot1 from '@public/image/jpg/projects/Dicot/1.png'
import dicot2 from '@public/image/jpg/projects/Dicot/2.png'
import dicot3 from '@public/image/jpg/projects/Dicot/3.png'
import dicot4 from '@public/image/jpg/projects/Dicot/4.png'

import email1 from '@public/image/jpg/projects/EmailClient/1.png'
import email2 from '@public/image/jpg/projects/EmailClient/2.png'
import email3 from '@public/image/jpg/projects/EmailClient/3.png'
import email4 from '@public/image/jpg/projects/EmailClient/4.png'

import { type StaticImageData } from 'next/image'
import * as React from 'react'

export interface ProjectInterface {
  title: string
  accent: string
  description: string | React.ReactNode
  images: StaticImageData[]
  thumbnails?: StaticImageData[]
  skills: (SkillInterface | undefined)[]
  links: SummaryLinkInterface[]
}

export const projects: ProjectInterface[] = [
  //Task Manager
  {
    title: 'Task Manager Website',
    accent: '(Front-end Development - React.js - Node.js)',
    description: (
      <>
        Task Manager Website is a simple one to <span className={styles.bold}>organize</span> all the tasks using{' '}
        <span className={styles.bold}>a calendar</span>, or {' '}
        <span className={styles.bold}>a timer</span> by logging in or signing in and saving the data in the backend.{' '}
      </>
    ),
    images: [taskmanager1, taskmanager2, taskmanager3, taskmanager4],
    skills: [
      skills[0],
      skills[1],
      skills[2],
      skills[8],
      skills[14],
      skills[13],
      skills[9],
      skills[10],
      
      skills[16],
      skills[18],
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/julianader/TaskManagerWebsite',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
    ],
  },
  //Dicot Website
  {
    title: 'Dicot Website',
    accent: '(Figma Based)',
    description: (
      <>
        Dicot Website for an Indian Company where I worked remotely on the website with a team
      </>
    ),
    images: [
      dicot1,
      dicot2,
      dicot3,
      dicot4,
    ],
    skills: [skills[0], skills[1], skills[2], skills[3], skills[17], skills[12], skills[13], skills[9], skills[14],, ],
    links: [
      {
        link: 'https://dicot.tech/',
        color: 'blue',
        text: 'Dicot Tech',
        icon:"ci:link"
      },
    ],
  },
   //Email Client
   {
    title: 'Email Client',
    accent: '(Backend Project)',
    description: (
      <>
        Email Client was my first project implemented with React.js, Material UI and node js that sends emails.
      </>
    ),
    images: [
      email1,
      email2,
      email3,
      email4,
    ],
    skills: [skills[0], skills[1],skills[2], skills[3], skills[8], skills[14], skills[13], skills[9],skills[10], ],
    links: [
      {
        link: 'https://github.com/julianader/EmailClient',
        color: 'blue',
        text: 'Github',
        icon:"ci:github"
      },
    ],
  },
  //Library System
  {
    title: 'Library System',
    accent: '(Backend Project)',
    description: (
      <>
        Library System is a simple Desktop Application for a library system
      </>
    ),
    images: [
      library1,
      library2,
      library3,
      library4,
    ],
    skills: [skills[7], skills[9], skills[19]],
    links: [
    ],
  },

]
