import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import ezz from '@public/image/png/company/ezz.png'
import depi from '@public/image/png/company/depi.png'
import dicot from '@public/image/png/company/dicot.png'
import indigen from '@public/image/png/company/indigen.png'
import ischool from '@public/image/png/company/ischool.png'
import sic from '@public/image/png/company/sic.png'
import { type StaticImageData } from 'next/image'
import React from 'react'

export interface ExperienceInterface {
  alt: string
  name: string | React.ReactNode
  link: string
  logo: string | StaticImageData
  icon: string
  time: string
  listicon: string
  experiences: string[] | React.ReactNode[]
  color: ColorType
}

export const experiences: ExperienceInterface[] = [
  //iSchool
  {
    alt: 'iSchool',
    name: (
      <>
        <span className={styles.bold}>iSchool</span> (Part-Time)
        <br />
        Programming Instructor in English
        
      </>
    ),
    link: 'https://www.ischooltech.com/',
    logo: ischool,
    time: "Nov 23 - Present",
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        <span className={styles.bold}>Clarified Complex programming concepts</span> in English for children, ensuring clarity and understanding.
      </>,
      <>
        Instructed <span className={styles.bold}>App, Web, Game Development, </span> emphasizing <span className={styles.bold}> problem-solving skills </span> (7yrs - 18 yrs).
      </>,
      <>
        Leveraged a deep understanding of programming concepts to effectively explain them <span className={styles.bold}> to children in English. </span>
      </>,
    ],
    color: 'blue',
  },
  //Depi
  {
    alt: 'Depi',
    name: (
      <>
        <span className={styles.bold}>DEPI </span> (Hybrid Course)
        <br />
        React Developer Training
      </>
    ),

    link: 'https://depi.gov.eg/',
    logo: depi,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    time: "Apr 24 - Present",
    experiences: [
      <>
        Proficient in  <span className={styles.bold}> React for dynamic web applications,</span> with strong foundations in <span className={styles.bold}> HTML, CSS, and JavaScript. </span>
      </>,
      <>
        Skilled in version control with <span className={styles.bold}> Git/GitHub </span> for efficient collaboration.
      </>,
      <>
        Experienced in server-side scripting using <span className={styles.bold}> NodeJS, </span> and familiar with <span className={styles.bold}> Docker and Kubernetes </span> for scalable deployment
      </>,
    ],
    color: 'blue',
  },
  //Sic
  {
    alt: 'Samsung I. C.',
    name: (
      <>
        <span className={styles.bold}>Samsung I.C.</span> (Course)
        <br />
        Internet of Things (IoT) Training
      </>
    ),
    time: "Sep 23 - Oct 23",
    link: 'https://sic.edc.org/',
    logo: sic,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        <span className={styles.bold}>Interacted </span> on <span className={styles.bold}> a Face Recognition </span>Home Security Project using <span className={styles.bold}>Raspberry Pi.</span>
      </>,
      <>
        Implemented {' '}
        <span className={styles.bold}> different applications of IoT</span> and <span className={styles.bold}>Big Data concepts.</span>
      </>,
    ],
    color: 'blue',
  },
  //Ezz Steel
  {
    alt: 'Ezz Steel Co.',
    name: (
      <>
        <span className={styles.bold}>Ezz Steel Co.</span> (Internship)
        <br />
        Front-end Developer
      </>
    ),

    link: 'https://www.ezzsteel.com/',
    logo: ezz,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    time: "Jul 2023",
    experiences: [
      <>
        Used <span className={styles.bold}> Oracle Database Business E-suite ERP System.</span>
      </>,
      <>
        Tackled <span className={styles.bold}> basic Network concepts </span> of the company{' '}
      </>,
      <>
        Practiced Database Scripts  <span className={styles.bold}>using PL SQL.</span>
      </>,
    ],
    color: 'blue',
  },
  //Dicot
  {
    alt: 'Dicot',
    name: (
      <>
        <span className={styles.bold}>Dicot</span> (Remote Internship)
        <br />
        Front-end Developer
      </>
    ),

    link: 'https://dicot.tech/',
    logo: dicot,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    time: "Sep 2023",
    experiences: [
      <>
      Implemented DICOT Website using <span className={styles.bold}> React.js, Material UI, and Chakra UI.</span>
      </>,
      <>
      Learned about the company's networking services and implemented the backend of their website using <span className={styles.bold}> Node.JS</span>
      </>
    ],
    color: 'blue',
  },
  //Indigen
  {
    alt: 'Indigen',
    name: (
      <>
        <span className={styles.bold}>Indigen</span> (Internship)
        <br />
        Front-end Development Internship
      </>
    ),

    link: 'https://www.indigen.com/',
    logo: indigen,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    time: "Jul 22 - Oct 22",
    experiences: [
      <>
        <span className={styles.bold}> 250+ hours </span> of working on a Website  implemented using <span className={styles.bold}> React.js, Material UI and Node.js </span>
      </>,
      <>
        Developed  <span className={styles.bold}> problem solving & UI/UX </span>  Skills.
      </>,

    ],
    color: 'blue',
  },
]
