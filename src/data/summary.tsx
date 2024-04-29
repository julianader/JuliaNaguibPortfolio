import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Summary.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import type { StaticImageData } from 'next/image'

export interface SummaryInterface {
  image: StaticImageData
  content: React.ReactNode
  extra?: React.ReactNode
  links: SummaryLinkInterface[]
}

export interface SummaryLinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export const summary: SummaryInterface = {
  image: photo,
  content: (
    <>
      I am <span className={styles.accent}>Julia Naguib</span> a{' '}
      <span className={styles.bold}>Junior Computer Science Student </span> with{' '}
      <span className={styles.bold}>a FULL scholarship </span>at Nile University, proficient in web development with hands-on project experience, I possess a {' '}
      <span className={styles.bold}>diverse skill set</span> in the field of Web Development.
      <div className={styles.break}></div> With a strong focus on delivering{' '}
      <span className={styles.bold}>
        clean code
        <span />, <span className={styles.bold}></span> high-quality projects{' '}
      </span>{' '}
      and <span className={styles.bold}>exceptional user interfaces</span>, I am committed to
      staying <span className={styles.bold}>up-to-date</span> with the latest industry trends and
      best practices.
    </>
  ),
  extra: (
    <>
      <div className={styles.break}></div>I am proud of my {' '}
      <span className={styles.bold}>3.9 CGPA </span> while joining {' '}
      <span className={styles.bold}>more than 4 student activities</span> , as a testament to {' '}
      <span className={styles.bold}>dedication, </span> and {' '}
      <span className={styles.bold}>commitment to maintaining excellence </span>throughout my academic journey.
    </>
  ),
  links: [
    {
      link: 'mailto:juliaanaguib@gmail.com',
      color: 'purple',
      text: 'juliaanaguib@gmail.com',
      icon: 'ci:mail',
    },
    {
      link: 'https://www.linkedin.com/in/julia-naguib/',
      color: 'purple',
      text: 'Linkedin Account',
      icon: 'bxl:linkedin-square',
    },
    {
      link: 'https://github.com/julianader',
      color: 'purple',
      text: 'github.com/julianader',
      icon: 'bxl:github',
    },
    {
      link: 'https://web.whatsapp.com/',
      text: '+2 0100 777 6310',
      color: 'purple',
      icon: 'ci:phone',
    },
  ],
}
