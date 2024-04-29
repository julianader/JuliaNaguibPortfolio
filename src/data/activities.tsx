import { type ColorType } from '@/lib/types'

export interface ActivityInterface {
  name: string
  type: string
  university: string
  time: string
  color: ColorType
}

export const activities: ActivityInterface[] = [
  {
    name: 'Vice Head of Registration Affairs',
    type: "Handling all Internationals Documents",
    university: 'Nile International Model United Nations (NIMUN)',
    time: 'Junior',
    color: 'blue',
  },
  {
    name: 'Marketing Member',
    type: "Experience & Soft Skills",
    university: 'IEEE Nile University',
    time: 'Sophomore',
    color: 'blue',
  },
  {
    name: 'Head of Media & Marketing',
    type: "Leadership & Entrepreneurship",
    university: 'Enactus Nile University',
    time: 'Freshman',
    color: 'blue',
  },
  {
    name: 'Programming Contestant',
    type: "Problem Solving",
    university: 'International Collegiate Programming Contests (ICPC)',
    time: 'Sophomore',
    color: 'blue',
  },
  {
    name: 'Django Workshops',
    type: "Web Development",
    university: 'Google Developer Student Club',
    time: 'Freshman',
    color: 'blue',
  },
  
]
